import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const bookRouter = createTRPCRouter({
  findMany: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.book.findMany({});
  }),
  addBook: publicProcedure
    .input(
      z.object({
        title: z.string(),
        author: z.string(),
        subject: z.string(),
        publishedDate: z.date(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      console.log(input);
      const books = await ctx.db.book.create({
        data: {
          title: input.title,
          author: input.author,
          subject: input.subject,
          publishedDate: input.publishedDate,
        },
      });
      return books;
    }),
});
