import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
// import classRoutes from "./routes/classRoutes";
// import studentRoutes from "./routes/studentRoutes";
// import teacherRoutes from "./routes/teacherRoutes";
import connectDB from "./config/db";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from './swagger';


dotenv.config();

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

connectDB();

app.use("/auth", authRoutes);
// app.use("/classes", classRoutes);
// app.use("/students", studentRoutes);
// app.use("/teachers", teacherRoutes);

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
