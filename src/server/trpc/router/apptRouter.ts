// The Goal with Zod is to eleiminate duplicative type declarations, 
// it would be able to infer the types for us! 
import { z } from "zod";

import { router, protectedProcedure } from "../trpc";

export const apptRouter = router({
  // referencing trpc.ts protectedProcedure that uses isAuthed
  // if there is NO session or user throw TRPCError {code: "UNAUTHORIZED"}
  // else return session as non-nullable 
  createAppt: protectedProcedure
    // declaring a zod object with key service being a string, apptTime being a string
  .input(z.object({
      service: z.string(),
      apptTime: z.string()
    }))
    .mutation(({ctx, input}) => {
      // assert has auth
      // ctx.prisma references the context.ts which is getting the 
      // db/client.ts that has the prisma client
      // .appointment is the table from the prisma client
      // going into prisma/schema.prisma will show the tables currently
      // in the database, .create() prisma method
      const appointment = ctx.prisma.appointment.create({
        data: {
          customerId: ctx.session.user.id,
          service: input.service,
          apptTime: input.apptTime
        }
      });
      return appointment;
    }),
    getAllAppts: protectedProcedure.input(z.object({}))
      .query( ({ctx}) => {
        return ctx.prisma.appointment.findMany();
    }),
});
