import { Router } from "express";
import { listCompletedCourseContentByUserController, updatedCompleteCourseController } from "../../controllers/completedCourseContent/CompletedCourseContent.controllers";

const completeCourseContentRoutes = Router();
completeCourseContentRoutes.get('/:userId/:courserId', listCompletedCourseContentByUserController);
completeCourseContentRoutes.patch('/:id', updatedCompleteCourseController);
export default completeCourseContentRoutes;


