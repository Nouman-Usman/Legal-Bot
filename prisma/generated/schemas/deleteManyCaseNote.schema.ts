import { z } from 'zod'
import { CaseNoteWhereInputObjectSchema } from './objects/CaseNoteWhereInput.schema'

export const CaseNoteDeleteManySchema = z.object({
  where: CaseNoteWhereInputObjectSchema.optional(),
})
