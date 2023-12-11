import {Router} from 'express';
import registerUser from '../controllers/Register.controller.js';
const userRouter = Router();
userRouter.route("/register").post(registerUser)
export default userRouter;