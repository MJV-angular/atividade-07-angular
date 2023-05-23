import { Router } from "express";

import userRouter from "./user/user.route";
import sessionRoutes from "./session/sessions.route";
import coursesRoutes from "./courses/courses.route";
import courseContentRoutes from "./coursesContent/coursesContent.route";
import courseUserRoutes from "./courseUser/courses.route";
import completeCourseContentRoutes from "./completeCoursesContent/coursesContent.route";
import courseContentUserRoutes from "./coursesContentUser/coursesContentUser.route";
const routes = Router();

routes.use("/user", userRouter);
routes.use("/login", sessionRoutes);
routes.use("/courses", coursesRoutes);
routes.use("/courseContent", courseContentRoutes);
routes.use("/registerCourse", courseUserRoutes);
routes.use("/completeCourseContent", completeCourseContentRoutes);
routes.use("/courseContentUser", courseContentUserRoutes);
export default routes;
