import { z } from 'zod'
import { CaseNoteCreateInputObjectSchema } from './objects/CaseNoteCreateInput.schema'
import { CaseNoteUncheckedCreateInputObjectSchema } from './objects/CaseNoteUncheckedCreateInput.schema'

export const CaseNoteCreateOneSchema = z.object({
  data: z.union([
    CaseNoteCreateInputObjectSchema,
    CaseNoteUncheckedCreateInputObjectSchema,
  ]),
})
