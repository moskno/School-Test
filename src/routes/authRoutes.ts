import express from 'express';
import { registerStudent, registerTeacher, login } from '../controllers/authController';

const router = express.Router();

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
router.post('/register/student', registerStudent);

/**
 * @swagger
 * /auth/register/teacher:
 *   post:
 *     summary: New teacher registration
 *     description: Creates a new teacher account in the system.
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
 *               - className
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *               className:
 *                 type: string
 *     responses:
 *       201:
 *         description: The teacher has successfully registered
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
 *         description: Error in data entered
 */
router.post('/register/teacher', registerTeacher);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login to the system
 *     description: Validates user information and returns a cookie token.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login was successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 isManager:
 *                   type: boolean
 *       401:
 *         description: Incorrect username or password
 */
router.post('/login', login);

export default router;

