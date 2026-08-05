import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
    schema: z.object({
        title: z.string().max(80, "El título no debe exceder los 80 caracteres para mantener la estética."),
        description: z.string().min(20, "El resumen debe ser lo suficientemente descriptivo (mín. 20 caracteres)."),
        pubDate: z.coerce.date(),
        author: z.string().default("Equipo CBS-UNMSM"),
        image: z.string().optional().describe("Ruta a la imagen en src/assets/"),
        tags: z.array(z.string()).min(1, "Debe incluir al menos una categoría/tag."),
        isDraft: z.boolean().default(true),
        featured: z.boolean().default(false),
    }),
});

const events = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/events' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        location: z.string(),
        type: z.enum(['charla', 'taller', 'conferencia', 'visita', 'otro']),
        image: z.string().optional(),
        featured: z.boolean().default(false),
        badge: z.string().optional(),
    }),
});

export const collections = { articles, events };
