import { procedure, protectedProcedure, router } from "../trpc";

export const authRouter = router({
  getSession: procedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
