import { Request, Response } from "express";
import getcoursesContentUserByCourseServices from "../../services/coursesContentUserByCourse/coursesContentUserByCourse.services";

const getCourseContentUserByCourseIdController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const userId = Number(req.user.id)
  try {
    const resp = await getcoursesContentUserByCourseServices(id, userId)
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
  getCourseContentUserByCourseIdController
}