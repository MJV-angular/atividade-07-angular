import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const listCompletedCourseByIdContentService = async (courseId: number, userId: number) => {

  const listCourses = await prisma.coursesContentUser.findMany(
    {
      where:{
        courseContent:{
          courseId: courseId
        },
        userId: userId,
      },
      select:{
        complete: true,
        courseContent: true,
        favorite: true,
        id: true,
        user: true,
      }
    }
  );
  return listCourses
};

export default listCompletedCourseByIdContentService;
