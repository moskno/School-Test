"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
// import classRoutes from "./routes/classRoutes";
// import studentRoutes from "./routes/studentRoutes";
// import teacherRoutes from "./routes/teacherRoutes";
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "School Management API",
            version: "1.0.0",
            description: "API for managing grades of students",
        },
        servers: [
            {
                url: "http://localhost:3500",
            },
        ],
    },
    apis: ["./src/routes/*.ts"],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.use("/auth", authRoutes_1.default);
// app.use("/classes", classRoutes);
// app.use("/students", studentRoutes);
// app.use("/teachers", teacherRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
