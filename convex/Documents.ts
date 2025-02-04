import { query } from "./_generated/server";

export const get = query({
  handler: async (ctx) => {
    const tasks = await ctx.db.query("docsdata").collect();
    // do something with `tasks`
    return tasks;
  },
});
