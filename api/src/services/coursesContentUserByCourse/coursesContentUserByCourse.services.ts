import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getcoursesContentUserByCourseServices = async (
  id: number,
  userId: number
) => {
  const coursesContent = await prisma.courseContent.findMany({
    where: {
      courseId: id,
    },
  });

  const coursesContentId = coursesContent.map((ele) => ele.id);

  const courseContentUserByCourses = coursesContentId.map((id) =>
    prisma.coursesContentUser.findMany({
      where: {
        userId: userId,
        courseContentId: id,
      },
      select:{
        complete: true,
        favorite:true,
        id: true,
        courseContent: {
          select:{
            text: true,
            title: true,
            description: true,
            id: true,
            video_url: true,
            createdAt: true,
            updatedAt: true,
          }
        }
      }
    })
  );

  const results = await Promise.all(courseContentUserByCourses);
   
 return results.flatMap(item => item)
};

export default getcoursesContentUserByCourseServices;
