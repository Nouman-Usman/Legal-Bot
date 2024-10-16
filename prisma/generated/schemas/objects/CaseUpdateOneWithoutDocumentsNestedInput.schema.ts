import { z } from 'zod'
import { CaseCreateWithoutDocumentsInputObjectSchema } from './CaseCreateWithoutDocumentsInput.schema'
import { CaseUncheckedCreateWithoutDocumentsInputObjectSchema } from './CaseUncheckedCreateWithoutDocumentsInput.schema'
import { CaseCreateOrConnectWithoutDocumentsInputObjectSchema } from './CaseCreateOrConnectWithoutDocumentsInput.schema'
import { CaseUpsertWithoutDocumentsInputObjectSchema } from './CaseUpsertWithoutDocumentsInput.schema'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'
import { CaseUpdateWithoutDocumentsInputObjectSchema } from './CaseUpdateWithoutDocumentsInput.schema'
import { CaseUncheckedUpdateWithoutDocumentsInputObjectSchema } from './CaseUncheckedUpdateWithoutDocumentsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUpdateOneWithoutDocumentsNestedInput> = z
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
    upsert: z
      .lazy(() => CaseUpsertWithoutDocumentsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => CaseWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => CaseUpdateWithoutDocumentsInputObjectSchema),
        z.lazy(() => CaseUncheckedUpdateWithoutDocumentsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const CaseUpdateOneWithoutDocumentsNestedInputObjectSchema = Schema
