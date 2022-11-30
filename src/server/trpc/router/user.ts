import { z } from "zod";

import { router, protectedProcedure } from "../trpc";

export const userRouter = router({
  getAllUsers: protectedProcedure.input(z.object({})).query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  // TODO: turn this into a getRole,

});