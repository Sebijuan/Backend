import request from "supertest";
import app from "../app.js";
import User from "../Models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

jest.mock("../Models/user.model.js");
jest.mock("bcrypt");
jest.mock("jsonwebtoken");

describe("Auth Routes", () => {
    describe("POST /api/auth/register", () => {
        it("should register a new user", async () => {
            const user = {
                username: "testuser",
                email: "test@example.com",
                password: "password123",
            };

            bcrypt.hash.mockResolvedValue("hashedpassword");
            User.create.mockResolvedValue({ username: "testuser", email: "test@example.com" });

            const response = await request(app).post("/api/auth/register").send(user);

            expect(response.status).toBe(201);
            expect(response.body).toEqual({
                message: "Usuario registrado exitosamente",
                user: { username: "testuser", email: "test@example.com" },
            });
        });

        it("should handle errors", async () => {
            const user = {
                username: "testuser",
                email: "test@example.com",
                password: "password123",
            };

            bcrypt.hash.mockRejectedValue(new Error("Hashing error"));

            const response = await request(app).post("/api/auth/register").send(user);

            expect(response.status).toBe(500);
            expect(response.body).toEqual({
                message: "Error al registrar usuario",
                error: "Hashing error",
            });
        });
    });

    describe("POST /api/auth/login", () => {
        it("should login a user", async () => {
            const user = {
                email: "test@example.com",
                password: "password123",
            };

            const foundUser = {
                _id: "userId",
                email: "test@example.com",
                password: "hashedpassword",
            };

            User.findOne.mockResolvedValue(foundUser);
            bcrypt.compare.mockResolvedValue(true);
            jwt.sign.mockReturnValue("token");

            const response = await request(app).post("/api/auth/login").send(user);

            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                message: "Inicio de sesión exitoso",
                token: "token",
            });
        });

        it("should handle invalid credentials", async () => {
            const user = {
                email: "test@example.com",
                password: "password123",
            };

            User.findOne.mockResolvedValue(null);

            const response = await request(app).post("/api/auth/login").send(user);

            expect(response.status).toBe(401);
            expect(response.body).toEqual({
                message: "Credenciales incorrectas",
            });
        });

        it("should handle errors", async () => {
            const user = {
                email: "test@example.com",
                password: "password123",
            };

            User.findOne.mockRejectedValue(new Error("Database error"));

            const response = await request(app).post("/api/auth/login").send(user);

            expect(response.status).toBe(500);
            expect(response.body).toEqual({
                message: "Error al iniciar sesión",
                error: "Database error",
            });
        });
    });

    describe("POST /api/auth/forgot-password", () => {
        it("should send a recovery email", async () => {
            const response = await request(app).post("/api/auth/forgot-password").send({
                email: "test@example.com",
            });

            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                message: "Correo de recuperación enviado",
            });
        });
    });

    describe("POST /api/auth/reset-password", () => {
        it("should reset the password", async () => {
            const response = await request(app).post("/api/auth/reset-password").send({
                password: "newpassword123",
            });

            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                message: "Contraseña restablecida",
            });
        });
    });
});