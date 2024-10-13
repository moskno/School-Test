import { Request, Response } from 'express';
import Student from '../models/studentModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
