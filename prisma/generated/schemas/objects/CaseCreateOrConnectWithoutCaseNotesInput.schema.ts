import { z } from 'zod'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'
import { CaseCreateWithoutCaseNotesInputObjectSchema } from './CaseCreateWithoutCaseNotesInput.schema'
import { CaseUncheckedCreateWithoutCaseNotesInputObjectSchema } from './CaseUncheckedCreateWithoutCaseNotesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseCreateOrConnectWithoutCaseNotesInput> = z
  .object({
    where: z.lazy(() => CaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CaseCreateWithoutCaseNotesInputObjectSchema),
      z.lazy(() => CaseUncheckedCreateWithoutCaseNotesInputObjectSchema),
    ]),
  })
  .strict()

export const CaseCreateOrConnectWithoutCaseNotesInputObjectSchema = Schema
