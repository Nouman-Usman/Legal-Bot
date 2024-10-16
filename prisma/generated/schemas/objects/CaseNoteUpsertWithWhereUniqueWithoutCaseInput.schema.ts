import { z } from 'zod'
import { CaseNoteWhereUniqueInputObjectSchema } from './CaseNoteWhereUniqueInput.schema'
import { CaseNoteUpdateWithoutCaseInputObjectSchema } from './CaseNoteUpdateWithoutCaseInput.schema'
import { CaseNoteUncheckedUpdateWithoutCaseInputObjectSchema } from './CaseNoteUncheckedUpdateWithoutCaseInput.schema'
import { CaseNoteCreateWithoutCaseInputObjectSchema } from './CaseNoteCreateWithoutCaseInput.schema'
import { CaseNoteUncheckedCreateWithoutCaseInputObjectSchema } from './CaseNoteUncheckedCreateWithoutCaseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteUpsertWithWhereUniqueWithoutCaseInput> =
  z
    .object({
      where: z.lazy(() => CaseNoteWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => CaseNoteUpdateWithoutCaseInputObjectSchema),
        z.lazy(() => CaseNoteUncheckedUpdateWithoutCaseInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => CaseNoteCreateWithoutCaseInputObjectSchema),
        z.lazy(() => CaseNoteUncheckedCreateWithoutCaseInputObjectSchema),
      ]),
    })
    .strict()

export const CaseNoteUpsertWithWhereUniqueWithoutCaseInputObjectSchema = Schema
