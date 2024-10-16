import { z } from 'zod'
import { CaseCreateWithoutCaseNotesInputObjectSchema } from './CaseCreateWithoutCaseNotesInput.schema'
import { CaseUncheckedCreateWithoutCaseNotesInputObjectSchema } from './CaseUncheckedCreateWithoutCaseNotesInput.schema'
import { CaseCreateOrConnectWithoutCaseNotesInputObjectSchema } from './CaseCreateOrConnectWithoutCaseNotesInput.schema'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseCreateNestedOneWithoutCaseNotesInput> = z
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
    connect: z.lazy(() => CaseWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const CaseCreateNestedOneWithoutCaseNotesInputObjectSchema = Schema
