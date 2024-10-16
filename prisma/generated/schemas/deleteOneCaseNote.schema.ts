import { z } from 'zod'
import { CaseNoteWhereUniqueInputObjectSchema } from './objects/CaseNoteWhereUniqueInput.schema'

export const CaseNoteDeleteOneSchema = z.object({
  where: CaseNoteWhereUniqueInputObjectSchema,
})
