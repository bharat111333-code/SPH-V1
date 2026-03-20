import { Router } from 'express';
import AuthController from '../controllers/authController';

const router = Router();
const authController = new AuthController();

export const setAuthRoutes = (app) => {
    app.use('/api/auth', router);
    router.post('/register', authController.register);
    router.post('/login', authController.login);
};