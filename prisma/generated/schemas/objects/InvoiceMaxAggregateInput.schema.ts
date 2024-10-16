import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.InvoiceMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    issueDate: z.literal(true).optional(),
    dueDate: z.literal(true).optional(),
    status: z.literal(true).optional(),
    details: z.literal(true).optional(),
    caseId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict()

export const InvoiceMaxAggregateInputObjectSchema = Schema
