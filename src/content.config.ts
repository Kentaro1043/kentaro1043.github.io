import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      externalUrl: z.string().url().optional(),
    }),
});

const profile = defineCollection({
  loader: glob({ base: "./src/content/profile", pattern: "**/*.{md,mdx}" }),
  schema: () =>
    z.object({
      title: z.string(),
    }),
});

const selfIntroduction = defineCollection({
  loader: glob({
    base: "./src/content/self-introduction",
    pattern: "**/*.{md,mdx}",
  }),
  schema: () =>
    z.object({
      title: z.string(),
    }),
});

export const collections = { blog, profile, selfIntroduction };
