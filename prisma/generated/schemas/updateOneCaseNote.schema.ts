import { z } from 'zod'
import { CaseNoteUpdateInputObjectSchema } from './objects/CaseNoteUpdateInput.schema'
import { CaseNoteUncheckedUpdateInputObjectSchema } from './objects/CaseNoteUncheckedUpdateInput.schema'
import { CaseNoteWhereUniqueInputObjectSchema } from './objects/CaseNoteWhereUniqueInput.schema'

export const CaseNoteUpdateOneSchema = z.object({
  data: z.union([
    CaseNoteUpdateInputObjectSchema,
    CaseNoteUncheckedUpdateInputObjectSchema,
  ]),
  where: CaseNoteWhereUniqueInputObjectSchema,
})
