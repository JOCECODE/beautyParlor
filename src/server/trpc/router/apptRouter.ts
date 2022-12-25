import { z } from "zod";

import { router, protectedProcedure } from "../trpc";

export const apptRouter = router({
  createAppt: protectedProcedure
    .input(z.object({
      service: z.string(),
      apptTime: z.string(),
      firstName: z.string(),
      lastName: z.string(),      
      phoneNumber: z.string(),
      confirmationStatus: z.string(),
    }))
    .mutation(({ctx, input}) => {
      // assert has auth
      const appointment = ctx.prisma.appointment.create({
        data: {
          customerId: ctx.session.user.id,
          service: input.service,
          apptTime: input.apptTime,
          firstName: input.firstName,
          lastName: input.lastName,
          phoneNumber: input.phoneNumber,
          confirmationStatus: input.confirmationStatus
        }
      });
      return appointment;
    }),
    getAllAppts: protectedProcedure.input(z.object({}))
      .query( ({ctx}) => {
        return ctx.prisma.appointment.findMany();
    }),
});
