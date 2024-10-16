import { z } from 'zod'
import { CaseCreateWithoutDocumentsInputObjectSchema } from './CaseCreateWithoutDocumentsInput.schema'
import { CaseUncheckedCreateWithoutDocumentsInputObjectSchema } from './CaseUncheckedCreateWithoutDocumentsInput.schema'
import { CaseCreateOrConnectWithoutDocumentsInputObjectSchema } from './CaseCreateOrConnectWithoutDocumentsInput.schema'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseCreateNestedOneWithoutDocumentsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CaseCreateWithoutDocumentsInputObjectSchema),
        z.lazy(() => CaseUncheckedCreateWithoutDocumentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CaseCreateOrConnectWithoutDocumentsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => CaseWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const CaseCreateNestedOneWithoutDocumentsInputObjectSchema = Schema
