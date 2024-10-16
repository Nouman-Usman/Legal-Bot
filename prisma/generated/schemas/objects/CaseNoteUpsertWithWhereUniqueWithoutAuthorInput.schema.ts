import { z } from 'zod'
import { CaseNoteWhereUniqueInputObjectSchema } from './CaseNoteWhereUniqueInput.schema'
import { CaseNoteUpdateWithoutAuthorInputObjectSchema } from './CaseNoteUpdateWithoutAuthorInput.schema'
import { CaseNoteUncheckedUpdateWithoutAuthorInputObjectSchema } from './CaseNoteUncheckedUpdateWithoutAuthorInput.schema'
import { CaseNoteCreateWithoutAuthorInputObjectSchema } from './CaseNoteCreateWithoutAuthorInput.schema'
import { CaseNoteUncheckedCreateWithoutAuthorInputObjectSchema } from './CaseNoteUncheckedCreateWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteUpsertWithWhereUniqueWithoutAuthorInput> =
  z
    .object({
      where: z.lazy(() => CaseNoteWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => CaseNoteUpdateWithoutAuthorInputObjectSchema),
        z.lazy(() => CaseNoteUncheckedUpdateWithoutAuthorInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => CaseNoteCreateWithoutAuthorInputObjectSchema),
        z.lazy(() => CaseNoteUncheckedCreateWithoutAuthorInputObjectSchema),
      ]),
    })
    .strict()

export const CaseNoteUpsertWithWhereUniqueWithoutAuthorInputObjectSchema =
  Schema
