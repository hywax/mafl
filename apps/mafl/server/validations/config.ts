import { z } from 'zod'
import { serviceSchema, tagSchema } from './service'

export const configSchema = z.object({
  title: z.string().optional(),
  lang: z.string().optional(),
  theme: z.string().optional(),
  checkUpdates: z.boolean().optional(),
  tags: z.array(tagSchema).optional(),
  services: z.union([
    z.array(serviceSchema),
    z.record(z.array(serviceSchema)),
  ]),
})
