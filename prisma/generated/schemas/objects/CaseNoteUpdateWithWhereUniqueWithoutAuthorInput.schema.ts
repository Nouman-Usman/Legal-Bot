import { z } from 'zod'
import { CaseNoteWhereUniqueInputObjectSchema } from './CaseNoteWhereUniqueInput.schema'
import { CaseNoteUpdateWithoutAuthorInputObjectSchema } from './CaseNoteUpdateWithoutAuthorInput.schema'
import { CaseNoteUncheckedUpdateWithoutAuthorInputObjectSchema } from './CaseNoteUncheckedUpdateWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteUpdateWithWhereUniqueWithoutAuthorInput> =
  z
    .object({
      where: z.lazy(() => CaseNoteWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CaseNoteUpdateWithoutAuthorInputObjectSchema),
        z.lazy(() => CaseNoteUncheckedUpdateWithoutAuthorInputObjectSchema),
      ]),
    })
    .strict()

export const CaseNoteUpdateWithWhereUniqueWithoutAuthorInputObjectSchema =
  Schema
