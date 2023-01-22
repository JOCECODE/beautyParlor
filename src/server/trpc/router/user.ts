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
  }),

//   updateUser: protectedProcedure
//     .input(z.object({ 
//     firstName: z.string(),
//     lastName: z.string(),
//     email: z.string().email(),
//     phoneNumber: z.string(),
//     address: z.string(), }))
//     .query(({ ctx, input }) => {
//       return ctx.prisma.user.update({
//   where: {
//     email: input.email,
//   },
//   data: {
//     firstName: input.firstName,
//     lastName: input.lastName,
//     phoneNumber: input.phoneNumber,
//     address: input.address,
//   },
// })
// }),

updateUser: protectedProcedure
    .input(z.object({ 
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phoneNumber: z.string(),
    address: z.string(), 
    isUpdated: z.boolean()}))
    .mutation(({ ctx, input}) => {

    const updatedUser = ctx.prisma.user.update({
        where: {
    email: input.email,
  },
  data: {
    firstName: input.firstName,
    lastName: input.lastName,
    phoneNumber: input.phoneNumber,
    address: input.address,
    isUpdated: input.isUpdated
  },
      });
      return updatedUser;
    })
  });



