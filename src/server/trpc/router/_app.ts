import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { apptRouter } from "./apptRouter";
import { userRouter } from './user'

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  appointment: apptRouter,
  user: userRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
