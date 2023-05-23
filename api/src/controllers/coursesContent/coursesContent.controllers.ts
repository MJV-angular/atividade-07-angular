import { Request, Response } from "express";
import updateCourseService from "../../services/courses/updateCourse.service";
import deleteCourseService from "../../services/courses/deleteCourse.service";
import createCourseContentService from "../../services/coursesContent/createCourseContent.service";
import listCourseContentService from "../../services/coursesContent/listCourseContent.service";

const createCourseContentController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const resp = await createCourseContentService(id, data);
    return res.json(resp);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const listCourseContentController = async (req: Request, res: Response) => {
  try {
    const resp = await listCourseContentService();
    return res.json(resp);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

// const getCourseContentController = async (req: Request, res: Response) => {
//   const id = Number(req.params.id);
//   try {
//     const resp = await listCourseContentService(id)
//     return res.json(resp);
//   } catch (error) {
//     if (error instanceof Error) {
//       return res.status(400).json({
//         message: error.message,
//       });
//     }
//   }
// };

const updatedCourseController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const resp = await updateCourseService(id, data);
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
    const resp = await deleteCourseService(id);
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
  createCourseContentController,
  listCourseContentController,
  updatedCourseController,
  deleteCourseController,
};
