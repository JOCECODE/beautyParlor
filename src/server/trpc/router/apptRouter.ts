import { z } from "zod";

import { router, protectedProcedure } from "../trpc";

export const apptRouter = router({
  createAppt: protectedProcedure
    .input(z.object({
      service: z.string(),
      apptTime: z.string()
    }))
    .mutation(({ctx, input}) => {
      // assert has auth
      const appointment = ctx.prisma.appointment.create({
        data: {
          customerId: ctx.session.user.id,
          service: input.service,
          apptTime: input.apptTime
        }
      });
      return appointment;
    }),
    getAllAppts: protectedProcedure.input(z.object({}).nullish())
      .query( ({ctx}) => {
        return ctx.prisma.appointment.findMany();
    }),
});
