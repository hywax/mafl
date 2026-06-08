import { z } from 'zod'
import { serviceSchema, tagSchema } from './service'

export const backgroundSchema = z.object({
  image: z.string().optional(),
  url: z.string().url().optional(),
  opacity: z.number().min(0).max(1).optional(),
  blur: z.number().min(0).optional(),
}).optional()

export const configSchema = z.object({
  title: z.string().optional(),
  lang: z.string().optional(),
  theme: z.string().optional(),
  background: backgroundSchema,
  checkUpdates: z.boolean().optional(),
  tags: z.array(tagSchema).optional(),
  services: z.union([
    z.array(serviceSchema),
    z.record(z.array(serviceSchema)),
  ]),
})
