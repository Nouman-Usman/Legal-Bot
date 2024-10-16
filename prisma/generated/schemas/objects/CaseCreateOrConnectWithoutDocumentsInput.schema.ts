import { z } from 'zod'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'
import { CaseCreateWithoutDocumentsInputObjectSchema } from './CaseCreateWithoutDocumentsInput.schema'
import { CaseUncheckedCreateWithoutDocumentsInputObjectSchema } from './CaseUncheckedCreateWithoutDocumentsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseCreateOrConnectWithoutDocumentsInput> = z
  .object({
    where: z.lazy(() => CaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CaseCreateWithoutDocumentsInputObjectSchema),
      z.lazy(() => CaseUncheckedCreateWithoutDocumentsInputObjectSchema),
    ]),
  })
  .strict()

export const CaseCreateOrConnectWithoutDocumentsInputObjectSchema = Schema
