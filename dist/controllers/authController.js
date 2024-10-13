"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerStudent = void 0;
const studentModel_1 = __importDefault(require("../models/studentModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const SALT_ROUNDS = 10;
const registerStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, classId } = req.body;
        const existingStudent = yield studentModel_1.default.findOne({ email });
        if (existingStudent) {
            res.status(400).json({ message: 'Student with this email already exists' });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, SALT_ROUNDS);
        const student = new studentModel_1.default({
            name,
            email,
            password: hashedPassword,
            classId,
            grades: [],
        });
        yield student.save;
        res.status(201).json({ message: 'Student successfully registered', userId: student._id });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error when registering the student' });
    }
});
exports.registerStudent = registerStudent;
