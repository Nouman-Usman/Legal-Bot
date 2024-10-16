import { z } from 'zod'
import { CaseNoteScalarWhereInputObjectSchema } from './CaseNoteScalarWhereInput.schema'
import { CaseNoteUpdateManyMutationInputObjectSchema } from './CaseNoteUpdateManyMutationInput.schema'
import { CaseNoteUncheckedUpdateManyWithoutCaseNotesAsAuthorInputObjectSchema } from './CaseNoteUncheckedUpdateManyWithoutCaseNotesAsAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteUpdateManyWithWhereWithoutAuthorInput> =
  z
    .object({
      where: z.lazy(() => CaseNoteScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => CaseNoteUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            CaseNoteUncheckedUpdateManyWithoutCaseNotesAsAuthorInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const CaseNoteUpdateManyWithWhereWithoutAuthorInputObjectSchema = Schema
