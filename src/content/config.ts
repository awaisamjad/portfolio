import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    title: z.string().optional(),
    dateStart: z.coerce.date().optional(),
    dateEnd: z.union([z.coerce.date(), z.string()]).optional(),
    url: z.string().optional(),
    status: z.enum(["active", "completed"]).optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    status: z.enum(["active", "dropped", "completed", "will-reattempt"]),
    project_type: z.enum(['professional', 'hobby'])
  }),
});

export const collections = { blog, work, projects };
