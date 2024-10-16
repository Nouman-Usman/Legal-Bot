import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DocumentUncheckedCreateWithoutCaseInput> = z
  .object({
    id: z.string().optional(),
    documentUrl: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    uploadDate: z.string().optional().nullable(),
    uploaderId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const DocumentUncheckedCreateWithoutCaseInputObjectSchema = Schema
