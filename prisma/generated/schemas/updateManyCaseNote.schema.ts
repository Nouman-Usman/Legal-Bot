import { z } from 'zod'
import { CaseNoteUpdateManyMutationInputObjectSchema } from './objects/CaseNoteUpdateManyMutationInput.schema'
import { CaseNoteWhereInputObjectSchema } from './objects/CaseNoteWhereInput.schema'

export const CaseNoteUpdateManySchema = z.object({
  data: CaseNoteUpdateManyMutationInputObjectSchema,
  where: CaseNoteWhereInputObjectSchema.optional(),
})
