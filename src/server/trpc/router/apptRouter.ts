import { z } from "zod";

import { router, protectedProcedure } from "../trpc";

export const apptRouter = router({
  createAppt: protectedProcedure
    .input(z.object({
      service: z.string()
    }))
    .mutation(({ctx, input}) => {
      // assert has auth
      const appointment = ctx.prisma.appointment.create({
        data: {
          customerId: ctx.session.user.id,
          service: input.service
        }
      });
      return appointment;
    })
  
});
