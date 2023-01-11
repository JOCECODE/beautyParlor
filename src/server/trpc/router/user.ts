import { z } from "zod";

import { router, protectedProcedure } from "../trpc";

export const userRouter = router({
  getAllUsers: protectedProcedure.input(z.object({})).query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  // TODO: turn this into a getRole,
      // TODO: turn this into a getRole,
  // use zod to validate input
  getUser: protectedProcedure
    .input(z.object({ email: z.string()}))
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findUnique({
        where: {
          email: input.email
        }
    }) ;
  })
});