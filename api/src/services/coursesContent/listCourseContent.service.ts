import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const listCourseContentService = async () => {

  const listCourse = await prisma.courseContent.findMany(
    {
      select:{
        categories: true,
        courseId: true,
        text: true,
        title: true,
        createdAt: true,
        video_url: true,
        id: true,
        updatedAt: true,
        course: true,
        description: true,
        quiz: true,
      }
    }
  );
  return listCourse
};

export default listCourseContentService;
