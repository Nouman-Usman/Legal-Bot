import { z } from 'zod'
import { CaseNoteCreateManyInputObjectSchema } from './objects/CaseNoteCreateManyInput.schema'

export const CaseNoteCreateManySchema = z.object({
  data: z.union([
    CaseNoteCreateManyInputObjectSchema,
    z.array(CaseNoteCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
})
