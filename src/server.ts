import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
// import classRoutes from "./routes/classRoutes";
// import studentRoutes from "./routes/studentRoutes";
// import teacherRoutes from "./routes/teacherRoutes";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

dotenv.config();

const app = express();
app.use(express.json());

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

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.use("/auth", authRoutes);
    // app.use("/classes", classRoutes);
    // app.use("/students", studentRoutes);
    // app.use("/teachers", teacherRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
