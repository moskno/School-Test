"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
// , registerTeacher, login 
const router = express_1.default.Router();
/**
 * @swagger
 * /auth/register/student:
 *   post:
 *     summary: New student registration
 *     description: Creates a new student account in the system.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - classId
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *               classId:
 *                 type: string
 *     responses:
 *       201:
 *         description: The student has successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 userId:
 *                   type: string
 *       400:
 *         description: Error in the entered data
 */
router.post('/register/student', authController_1.registerStudent);
// router.post('/register/teacher', registerTeacher);
// router.post('/login', login);
exports.default = router;
