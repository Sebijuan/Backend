import bcrypt from "bcrypt";
import User from "../Models/user.model.js";
import { register } from "../Controllers/auth.controller.js";

jest.mock("bcrypt");
jest.mock("../Models/user.model.js");

describe("Auth Controller - Register", () => {
    let req, res;

    beforeEach(() => {
        req = {
            body: {
                username: "testuser",
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

    it("should register a new user successfully", async () => {
        bcrypt.hash.mockResolvedValue("hashedpassword");
        User.create.mockResolvedValue({
            username: "testuser",
            email: "test@example.com",
        });

        await register(req, res);

        expect(bcrypt.hash).toHaveBeenCalledWith("password123", 10);
        expect(User.create).toHaveBeenCalledWith({
            username: "testuser",
            email: "test@example.com",
            password: "hashedpassword",
        });
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            message: "Usuario registrado exitosamente",
            user: { username: "testuser", email: "test@example.com" },
        });
    });

    it("should return an error if bcrypt.hash fails", async () => {
        bcrypt.hash.mockRejectedValue(new Error("Hashing error"));

        await register(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            message: "Error al registrar usuario",
            error: expect.any(Error),
        });
    });

    it("should return an error if User.create fails", async () => {
        bcrypt.hash.mockResolvedValue("hashedpassword");
        User.create.mockRejectedValue(new Error("Database error"));

        await register(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            message: "Error al registrar usuario",
            error: expect.any(Error),
        });
    });

    it("should return an error if request body is incomplete", async () => {
        req.body = { username: "testuser" }; // Faltan email y password

        await register(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({
            message: "Faltan datos requeridos",
        });
    });
});
