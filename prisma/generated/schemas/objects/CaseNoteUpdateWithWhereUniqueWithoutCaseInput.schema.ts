import { z } from 'zod'
import { CaseNoteWhereUniqueInputObjectSchema } from './CaseNoteWhereUniqueInput.schema'
import { CaseNoteUpdateWithoutCaseInputObjectSchema } from './CaseNoteUpdateWithoutCaseInput.schema'
import { CaseNoteUncheckedUpdateWithoutCaseInputObjectSchema } from './CaseNoteUncheckedUpdateWithoutCaseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteUpdateWithWhereUniqueWithoutCaseInput> =
  z
    .object({
      where: z.lazy(() => CaseNoteWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CaseNoteUpdateWithoutCaseInputObjectSchema),
        z.lazy(() => CaseNoteUncheckedUpdateWithoutCaseInputObjectSchema),
      ]),
    })
    .strict()

export const CaseNoteUpdateWithWhereUniqueWithoutCaseInputObjectSchema = Schema
