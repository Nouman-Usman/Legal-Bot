import { z } from 'zod'
import { CaseCreateWithoutCaseNotesInputObjectSchema } from './CaseCreateWithoutCaseNotesInput.schema'
import { CaseUncheckedCreateWithoutCaseNotesInputObjectSchema } from './CaseUncheckedCreateWithoutCaseNotesInput.schema'
import { CaseCreateOrConnectWithoutCaseNotesInputObjectSchema } from './CaseCreateOrConnectWithoutCaseNotesInput.schema'
import { CaseUpsertWithoutCaseNotesInputObjectSchema } from './CaseUpsertWithoutCaseNotesInput.schema'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'
import { CaseUpdateWithoutCaseNotesInputObjectSchema } from './CaseUpdateWithoutCaseNotesInput.schema'
import { CaseUncheckedUpdateWithoutCaseNotesInputObjectSchema } from './CaseUncheckedUpdateWithoutCaseNotesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUpdateOneWithoutCaseNotesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CaseCreateWithoutCaseNotesInputObjectSchema),
        z.lazy(() => CaseUncheckedCreateWithoutCaseNotesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CaseCreateOrConnectWithoutCaseNotesInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => CaseUpsertWithoutCaseNotesInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => CaseWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => CaseUpdateWithoutCaseNotesInputObjectSchema),
        z.lazy(() => CaseUncheckedUpdateWithoutCaseNotesInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const CaseUpdateOneWithoutCaseNotesNestedInputObjectSchema = Schema
