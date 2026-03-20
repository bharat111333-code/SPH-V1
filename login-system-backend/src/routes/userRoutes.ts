import { Router } from 'express';
import { UserController } from '../controllers/userController';

const userRouter = Router();
const userController = new UserController();

export const setUserRoutes = (app: any) => {
    app.use('/api/users', userRouter);

    userRouter.get('/:id', userController.getUser);
    userRouter.put('/:id', userController.updateUser);
};