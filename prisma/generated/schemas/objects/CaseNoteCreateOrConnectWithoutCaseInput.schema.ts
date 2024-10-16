import { z } from 'zod'
import { CaseNoteWhereUniqueInputObjectSchema } from './CaseNoteWhereUniqueInput.schema'
import { CaseNoteCreateWithoutCaseInputObjectSchema } from './CaseNoteCreateWithoutCaseInput.schema'
import { CaseNoteUncheckedCreateWithoutCaseInputObjectSchema } from './CaseNoteUncheckedCreateWithoutCaseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteCreateOrConnectWithoutCaseInput> = z
  .object({
    where: z.lazy(() => CaseNoteWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CaseNoteCreateWithoutCaseInputObjectSchema),
      z.lazy(() => CaseNoteUncheckedCreateWithoutCaseInputObjectSchema),
    ]),
  })
  .strict()

export const CaseNoteCreateOrConnectWithoutCaseInputObjectSchema = Schema
