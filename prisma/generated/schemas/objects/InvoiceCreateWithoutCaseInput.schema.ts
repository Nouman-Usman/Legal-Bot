import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.InvoiceCreateWithoutCaseInput> = z
  .object({
    id: z.string().optional(),
    amount: z.string().optional().nullable(),
    issueDate: z.string().optional().nullable(),
    dueDate: z.string().optional().nullable(),
    status: z.string().optional().nullable(),
    details: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const InvoiceCreateWithoutCaseInputObjectSchema = Schema
