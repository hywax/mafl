import { z } from 'zod'

export const statusSchema = z.object({
  enabled: z.boolean().optional(),
  interval: z.number().optional(),
  animation: z.boolean().optional(),
})

export const iconSchema = z.object({
  url: z.string().optional(),
  name: z.string().optional(),
  wrap: z.boolean().optional(),
  background: z.string().optional(),
  color: z.string().optional(),
})

export const tagSchema = z.object({
  name: z.string(),
  color: z.string(),
})

export const serviceSchema = z.object({
  title: z.string().nullish().optional(),
  description: z.string().nullish().optional(),
  link: z.string().nullish().optional(),
  target: z.string().optional(),
  icon: iconSchema.optional(),
  status: statusSchema.optional(),
  type: z.string().optional(),
  options: z.record(z.any()).optional(),
  secrets: z.record(z.any()).optional(),
})
