import { z } from 'zod'
import { CaseUpdateWithoutDocumentsInputObjectSchema } from './CaseUpdateWithoutDocumentsInput.schema'
import { CaseUncheckedUpdateWithoutDocumentsInputObjectSchema } from './CaseUncheckedUpdateWithoutDocumentsInput.schema'
import { CaseCreateWithoutDocumentsInputObjectSchema } from './CaseCreateWithoutDocumentsInput.schema'
import { CaseUncheckedCreateWithoutDocumentsInputObjectSchema } from './CaseUncheckedCreateWithoutDocumentsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUpsertWithoutDocumentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => CaseUpdateWithoutDocumentsInputObjectSchema),
      z.lazy(() => CaseUncheckedUpdateWithoutDocumentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CaseCreateWithoutDocumentsInputObjectSchema),
      z.lazy(() => CaseUncheckedCreateWithoutDocumentsInputObjectSchema),
    ]),
  })
  .strict()

export const CaseUpsertWithoutDocumentsInputObjectSchema = Schema
