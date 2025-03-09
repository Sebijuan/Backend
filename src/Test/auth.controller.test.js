import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Models/user.model.js";
import { register, login, forgotPassword, resetPassword } from "../Controllers/auth.controller.js";

jest.mock("bcrypt");
jest.mock("jsonwebtoken");
jest.mock("../Models/user.model.js");

describe("Auth Controller", () => {
    describe("register", () => {
        it("should register a new user", async () => {
            const req = {
                body: {
                    username: "testuser",
                    email: "test@example.com",
                    password: "password123",
                },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            bcrypt.hash.mockResolvedValue("hashedpassword");
            User.create.mockResolvedValue({ username: "testuser", email: "test@example.com" });

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

        it("should handle errors", async () => {
            const req = {
                body: {
                    username: "testuser",
                    email: "test@example.com",
                    password: "password123",
                },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            bcrypt.hash.mockRejectedValue(new Error("Hashing error"));

            await register(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({
                message: "Error al registrar usuario",
                error: new Error("Hashing error"),
            });
        });
    });

    describe("login", () => {
        it("should login a user", async () => {
            const req = {
                body: {
                    email: "test@example.com",
                    password: "password123",
                },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

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
            expect(jwt.sign).toHaveBeenCalledWith({ id: "userId" }, undefined, { expiresIn: undefined });
            expect(res.json).toHaveBeenCalledWith({
                message: "Inicio de sesión exitoso",
                token: "token",
            });
        });

        it("should handle invalid credentials", async () => {
            const req = {
                body: {
                    email: "test@example.com",
                    password: "password123",
                },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            User.findOne.mockResolvedValue(null);

            await login(req, res);

            expect(res.status).toHaveBeenCalledWith(401);
            expect(res.json).toHaveBeenCalledWith({
                message: "Credenciales incorrectas",
            });
        });

        it("should handle errors", async () => {
            const req = {
                body: {
                    email: "test@example.com",
                    password: "password123",
                },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            User.findOne.mockRejectedValue(new Error("Database error"));

            await login(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({
                message: "Error al iniciar sesión",
                error: new Error("Database error"),
            });
        });
    });

   
describe("forgotPassword", () => {
    it("should handle errors", async () => {
        const req = {};
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };
       
        
        await forgotPassword(req, res);

        // Verifica el manejo del error
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            message: "Error al enviar correo de recuperación",
        });
    });
});

describe("resetPassword", () => {
    it("should handle errors", async () => {
        const req = {};
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };
       
       
        await resetPassword(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            message: "Error al restablecer la contraseña",
        });
    });
});
});