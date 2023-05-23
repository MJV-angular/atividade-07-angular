import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const listCourseService = async () => {

  const listCourse = await prisma.course.findMany({
    select:{
      courseContent: true,
      createdAt: true,
      id: true,
      name: true,
      updatedAt: true,
      user: true,
      description: true,
      image: true,
      
    }
  });
  return listCourse
};

export default listCourseService;
