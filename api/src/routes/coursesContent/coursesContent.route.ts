import { Router } from "express";
import { createCourseContentController, listCourseContentController } from "../../controllers/coursesContent/coursesContent.controllers";
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middleware";

const courseContentRoutes = Router();
courseContentRoutes.post('/:id', ensureAuthMiddleware, createCourseContentController);
courseContentRoutes.get('/', listCourseContentController);
export default courseContentRoutes;


