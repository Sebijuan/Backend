import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Models/user.model.js";
import { login } from "../Controllers/auth.controller.js";

jest.mock("bcrypt");
jest.mock("jsonwebtoken");
jest.mock("../Models/user.model.js");

describe("Auth Controller - Login", () => {
    let req, res;
    
    beforeEach(() => {
        req = {
            body: {
                email: "test@example.com",
                password: "password123",
            },
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        jest.clearAllMocks();
    });

    it("should login a user successfully", async () => {
        const user = {
            _id: "userId",
            email: "test@example.com",
            password: "hashedpassword",
        };

        User.findOne.mockResolvedValue(user);
        bcrypt.compare.mockResolvedValue(true);
        jwt.sign.mockReturnValue("token");

        await login(req, res);

        expect(User.findOne).toHaveBeenCalledWith({ email: "test@example.com" });
        expect(bcrypt.compare).toHaveBeenCalledWith("password123", "hashedpassword");
        expect(jwt.sign).toHaveBeenCalledWith({ id: "userId" }, expect.any(String), { expiresIn: expect.any(String) });
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            message: "Inicio de sesión exitoso",
            token: "token",
        });
    });

    it("should return an error if user is not found", async () => {
        User.findOne.mockResolvedValue(null);

        await login(req, res);

        expect(User.findOne).toHaveBeenCalledWith({ email: "test@example.com" });
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: "Usuario no encontrado" });
    });

    it("should return an error if password is incorrect", async () => {
        const user = {
            _id: "userId",
            email: "test@example.com",
            password: "hashedpassword",
        };

        User.findOne.mockResolvedValue(user);
        bcrypt.compare.mockResolvedValue(false);

        await login(req, res);

        expect(bcrypt.compare).toHaveBeenCalledWith("password123", "hashedpassword");
        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ message: "Contraseña incorrecta" });
    });

    it("should return an error if bcrypt.compare fails", async () => {
        const user = {
            _id: "userId",
            email: "test@example.com",
            password: "hashedpassword",
        };

        User.findOne.mockResolvedValue(user);
        bcrypt.compare.mockRejectedValue(new Error("Error en bcrypt"));

        await login(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            message: "Error al iniciar sesión",
            error: expect.any(Object),
        });
    });

    it("should return an error if jwt.sign fails", async () => {
        const user = {
            _id: "userId",
            email: "test@example.com",
            password: "hashedpassword",
        };

        User.findOne.mockResolvedValue(user);
        bcrypt.compare.mockResolvedValue(true);
        jwt.sign.mockImplementation(() => {
            throw new Error("Error en JWT");
        });

        await login(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            message: "Error al generar el token",
            error: expect.any(Object),
        });
    });

    it("should return an error if request body is incomplete", async () => {
        req.body = { email: "test@example.com" }; // Falta la contraseña

        await login(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: "Faltan datos requeridos" });
    });
});
