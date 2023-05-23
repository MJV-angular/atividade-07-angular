import { PrismaClient } from "@prisma/client";
import { ICoursesUser } from "../../interfaces/coursesUser";

const prisma = new PrismaClient();

const createCourseUserService = async (userId: number, data: ICoursesUser) => {
  console.log(userId)
  const { courseId }: ICoursesUser = data;

  const idsRegister: number[] = [];

  try {
    const criarUserContent = async (courseId: number) => {
      await prisma.userCourses.create({
        data: {
          courseId: courseId,
          userId: userId,
        },
      });

      const coursesContent = await prisma.courseContent.findMany({
        where: {
          courseId: courseId,
        },
      });

      const coursesContentUserPromises = coursesContent.map(async (ele) => {
        await prisma.coursesContentUser.create({
          data: {
            courseContentId: ele.id,
            userId: userId,
          },
        });
      });

      await Promise.all(coursesContentUserPromises);
    };

    const registerCourses = await Promise.all(
      courseId.map((ele) =>
        prisma.userCourses.findUnique({
          where: {
            id: ele,
          },
        })
      )
    );

    courseId.forEach((ele) => {
      if (registerCourses.some((course) => course?.courseId === ele)) {
        idsRegister.push(ele);
      }
    });

    const criarUserContentPromises = courseId.map((ele) =>
      criarUserContent(ele)
    );

    await Promise.all(criarUserContentPromises);

    const coursesAndCourseContentUser = await prisma.user.findMany({
      where: {
        id: userId,
      },
      select: {
        coursesContentUser: {
          select: {
            courseContent: {
              select: {
                description: true,
                title: true,
                courseId: true,
                text: true,
                video_url: true,
                updatedAt: true,
                createdAt: true,
                id: true,
                categories: true,
              },
            },
            complete: true,
            favorite: true,
            id: true,
          },
        },
        courses: {
          select: {
            course: {
              select: {
                name: true,
                image: true,
                courseContent: true,
                description: true,
                createdAt: true,
                updatedAt: true,
                id: true,
              },
            },
          },
        },
      },
    });

    return coursesAndCourseContentUser;
  } catch (error) {
    return error;
  } finally {
    await prisma.$disconnect();
  }
};

export default createCourseUserService;
