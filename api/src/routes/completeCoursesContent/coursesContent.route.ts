import { Router } from "express";
import { listCompletedCourseContentByUserController, updatedCompleteCourseController } from "../../controllers/completedCourseContent/completedCourseContent.controllers";

const completeCourseContentRoutes = Router();
completeCourseContentRoutes.get('/:userId/:courserId', listCompletedCourseContentByUserController);
completeCourseContentRoutes.patch('/:id', updatedCompleteCourseController);
export default completeCourseContentRoutes;


