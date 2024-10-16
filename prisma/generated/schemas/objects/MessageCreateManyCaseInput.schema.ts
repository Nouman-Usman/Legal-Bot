import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageCreateManyCaseInput> = z
  .object({
    id: z.string().optional(),
    content: z.string().optional().nullable(),
    timestamp: z.string(),
    senderId: z.string(),
    receiverId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const MessageCreateManyCaseInputObjectSchema = Schema
