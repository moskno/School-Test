import { Request, Response } from 'express';
import Student from '../models/studentModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ClientRequest } from 'http';
import { Console } from 'console';

const SALT_ROUNDS = 10;

export const registerStudent = async (req: Request, res: Response) => {
    try{
        const {name, email, password, classId} = req.body;
        const existingStudent = await Student.findOne({email});
        if (existingStudent){
            res.status(400).json({message: 'Student with this email already exists'});
        }
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        const student = new Student({
            name,
            email,
            password: hashedPassword,
            classId,
            grades: [],
        });
        await student.save
        res.status(201).json({message: 'Student successfully registered', userId: student._id});
    }

    catch (error){
        console.error(error);
        res.status(500).json({message: 'Error when registering the student'});
        
    }
}