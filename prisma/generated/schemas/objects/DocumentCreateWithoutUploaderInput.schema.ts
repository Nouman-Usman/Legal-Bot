import { z } from 'zod'
import { CaseCreateNestedOneWithoutDocumentsInputObjectSchema } from './CaseCreateNestedOneWithoutDocumentsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DocumentCreateWithoutUploaderInput> = z
  .object({
    id: z.string().optional(),
    documentUrl: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    uploadDate: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    case: z
      .lazy(() => CaseCreateNestedOneWithoutDocumentsInputObjectSchema)
      .optional(),
  })
  .strict()

export const DocumentCreateWithoutUploaderInputObjectSchema = Schema
