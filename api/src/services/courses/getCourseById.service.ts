import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getCourseByIdService = async (id: number) => {

  const course = await prisma.course.findUnique({
    where: {
      id,
    },
    select: {
      createdAt: true,
      id: true,
      name: true,
      updatedAt: true,
      user: true,
      image: true,
      courseContent: true,
      description: true,
    },
    
  });
  
  return course
};

export default getCourseByIdService;
