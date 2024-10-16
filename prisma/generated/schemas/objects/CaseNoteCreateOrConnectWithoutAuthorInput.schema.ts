import { z } from 'zod'
import { CaseNoteWhereUniqueInputObjectSchema } from './CaseNoteWhereUniqueInput.schema'
import { CaseNoteCreateWithoutAuthorInputObjectSchema } from './CaseNoteCreateWithoutAuthorInput.schema'
import { CaseNoteUncheckedCreateWithoutAuthorInputObjectSchema } from './CaseNoteUncheckedCreateWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteCreateOrConnectWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => CaseNoteWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CaseNoteCreateWithoutAuthorInputObjectSchema),
      z.lazy(() => CaseNoteUncheckedCreateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict()

export const CaseNoteCreateOrConnectWithoutAuthorInputObjectSchema = Schema
