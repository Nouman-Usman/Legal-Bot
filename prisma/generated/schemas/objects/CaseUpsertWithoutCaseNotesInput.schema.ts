import { z } from 'zod'
import { CaseUpdateWithoutCaseNotesInputObjectSchema } from './CaseUpdateWithoutCaseNotesInput.schema'
import { CaseUncheckedUpdateWithoutCaseNotesInputObjectSchema } from './CaseUncheckedUpdateWithoutCaseNotesInput.schema'
import { CaseCreateWithoutCaseNotesInputObjectSchema } from './CaseCreateWithoutCaseNotesInput.schema'
import { CaseUncheckedCreateWithoutCaseNotesInputObjectSchema } from './CaseUncheckedCreateWithoutCaseNotesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUpsertWithoutCaseNotesInput> = z
  .object({
    update: z.union([
      z.lazy(() => CaseUpdateWithoutCaseNotesInputObjectSchema),
      z.lazy(() => CaseUncheckedUpdateWithoutCaseNotesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CaseCreateWithoutCaseNotesInputObjectSchema),
      z.lazy(() => CaseUncheckedCreateWithoutCaseNotesInputObjectSchema),
    ]),
  })
  .strict()

export const CaseUpsertWithoutCaseNotesInputObjectSchema = Schema
