import { Request, Response } from "express";
import createCourseService from "../../services/courses/createCourse.service"
import listCourseService from "../../services/courses/listCourse.service";
import updateCourseService from "../../services/courses/updateCourse.service";
import deleteCourseService from "../../services/courses/deleteCourse.service";
import getCourseByIdService from "../../services/courses/getCourseById.service";


const createCourseController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const resp = await createCourseService(data)
    return res.json(resp);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const listCourseController = async (req: Request, res: Response) => {
  try {
    const resp = await listCourseService()
    return res.json(resp);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const getCourseByIdController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const resp = await getCourseByIdService(id)
    return res.json(resp);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};


const updatedCourseController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const resp = await updateCourseService(id, data)
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
  createCourseController,
  listCourseController,
  updatedCourseController,
  deleteCourseController,
  getCourseByIdController
}