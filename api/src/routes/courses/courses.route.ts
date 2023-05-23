import { Router } from "express";
import { createCourseController, listCourseController, updatedCourseController, deleteCourseController, getCourseByIdController} from "../../controllers/courses/courses.controllers"

const coursesRoutes = Router();

coursesRoutes.post("", createCourseController);
coursesRoutes.get("", listCourseController);
coursesRoutes.get("/:id", getCourseByIdController);
coursesRoutes.patch('/:id', updatedCourseController);
coursesRoutes.delete('/:id', deleteCourseController);

export default coursesRoutes;

