import express from 'express';
import { registerStudent} from '../controllers/authController';
// , registerTeacher, login 
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

// router.post('/register/teacher', registerTeacher);

// router.post('/login', login);

export default router;

