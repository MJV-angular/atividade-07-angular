import { Router } from "express";
import { getCourseContentUserByCourseIdController } from "../../controllers/coursesContentUser/coursesContentUserByCourse.controllers";
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middleware";

const courseContentUserRoutes = Router();

courseContentUserRoutes.get('/:id',ensureAuthMiddleware, getCourseContentUserByCourseIdController);
export default courseContentUserRoutes;


