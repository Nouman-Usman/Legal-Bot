import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    content: z.literal(true).optional(),
    timestamp: z.literal(true).optional(),
    senderId: z.literal(true).optional(),
    receiverId: z.literal(true).optional(),
    caseId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const MessageCountAggregateInputObjectSchema = Schema
