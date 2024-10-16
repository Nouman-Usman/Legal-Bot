import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DocumentMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    documentUrl: z.literal(true).optional(),
    description: z.literal(true).optional(),
    uploadDate: z.literal(true).optional(),
    caseId: z.literal(true).optional(),
    uploaderId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict()

export const DocumentMaxAggregateInputObjectSchema = Schema
