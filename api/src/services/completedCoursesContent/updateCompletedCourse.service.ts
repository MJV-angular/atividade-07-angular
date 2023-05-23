import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateCompleteCourseContentService = async (courseId: string) => {

  const courseContentUpdate = await prisma.coursesContentUser.update({
    where: {
      id: Number(courseId),
    },
    data: {
      complete: true
    },
  });

  return courseContentUpdate
};

export default updateCompleteCourseContentService;
