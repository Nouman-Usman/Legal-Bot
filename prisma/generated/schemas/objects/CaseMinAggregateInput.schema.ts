import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    caseNumber: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    status: z.literal(true).optional(),
    startDate: z.literal(true).optional(),
    endDate: z.literal(true).optional(),
    lawyerProfileId: z.literal(true).optional(),
    clientId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict()

export const CaseMinAggregateInputObjectSchema = Schema
