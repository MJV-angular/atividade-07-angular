import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const listCourseService = async () => {

  const listCourse = await prisma.course.findMany({
    select:{
      createdAt: true,
      id: true,
      name: true,
      updatedAt: true,
      user: true,
      image: true,
      courseContent: true,
      description: true,
    }
  });
  return listCourse
};

export default listCourseService;
