import { Request, Response } from "express";
import Student from "../models/studentModel";
import Teacher from "../models/teacherModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ClientRequest } from "http";
import { Console } from "console";

const SALT_ROUNDS = 10;

export const registerStudent = async (req: Request, res: Response) => {
  try {
    const { name, email, password, classId } = req.body;
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      res
        .status(400)
        .json({ message: "Student with this email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const student = new Student({
      name,
      email,
      password: hashedPassword,
      classId,
      grades: [],
    });
    await student.save;
    res
      .status(201)
      .json({
        message: "Student successfully registered",
        userId: student._id,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error when registering the student" });
  }
};

export const registerTeacher = async (req: Request, res: Response) => {
  try {
    const { name, email, password, className } = req.body;
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      res
        .status(400)
        .json({ message: "Teacher with this email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const teacher = new Teacher({
      name,
      email,
      password: hashedPassword,
      className,
    });

    await teacher.save();
    res
      .status(201)
      .json({
        message: "Teacher successfully registered",
        userId: teacher._id,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error when registering the teacher" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const student = await Student.findOne({ email });
    const teacher = await Teacher.findOne({ email });
    if (!student && !teacher) {
      res.status(401).json({ message: "Incorrect email or password" });
    }

    const user = student || teacher;
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        res.status(401).json({ message: "Incorrect email or password" });
      }

      const token = jwt.sign(
        { userId: user._id, role: student ? "student" : "teacher" },
        process.env.JWT_SECRET || "defaultsecret",
        { expiresIn: "1h" }
      );

      res
        .status(200)
        .json({ message: "login successful", userId: user._id, token });
    } else {
      res.status(401).json({ message: "Incorrect email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error logging in" });
  }
};
