import { Request, Response } from "express";
import deleteCourseService from "../../services/courses/deleteCourse.service";
import listCompletedCourseByIdContentService from "../../services/completedCoursesContent/listCompletedCourseContent.service";
import updateCompleteCourseContentService from "../../services/completedCoursesContent/updateCompletedCourse.service";

const listCompletedCourseContentByUserController = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const courserId = Number(req.params.courserId);
    console.log(userId, req.params)
    const resp = await listCompletedCourseByIdContentService(userId, courserId)
    return res.json(resp);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};


const updatedCompleteCourseController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const resp = await updateCompleteCourseContentService(id)
    return res.json(resp);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};


const deleteCourseController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const resp = await deleteCourseService(id)
    return res.json(resp);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export {
  listCompletedCourseContentByUserController,
  updatedCompleteCourseController,
  deleteCourseController
}