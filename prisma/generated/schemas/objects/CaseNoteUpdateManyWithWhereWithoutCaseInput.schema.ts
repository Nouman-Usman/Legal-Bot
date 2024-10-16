import { z } from 'zod'
import { CaseNoteScalarWhereInputObjectSchema } from './CaseNoteScalarWhereInput.schema'
import { CaseNoteUpdateManyMutationInputObjectSchema } from './CaseNoteUpdateManyMutationInput.schema'
import { CaseNoteUncheckedUpdateManyWithoutCaseNotesInputObjectSchema } from './CaseNoteUncheckedUpdateManyWithoutCaseNotesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteUpdateManyWithWhereWithoutCaseInput> = z
  .object({
    where: z.lazy(() => CaseNoteScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => CaseNoteUpdateManyMutationInputObjectSchema),
      z.lazy(
        () => CaseNoteUncheckedUpdateManyWithoutCaseNotesInputObjectSchema,
      ),
    ]),
  })
  .strict()

export const CaseNoteUpdateManyWithWhereWithoutCaseInputObjectSchema = Schema
