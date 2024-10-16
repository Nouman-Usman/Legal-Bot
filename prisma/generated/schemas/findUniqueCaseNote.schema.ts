import { z } from 'zod'
import { CaseNoteWhereUniqueInputObjectSchema } from './objects/CaseNoteWhereUniqueInput.schema'

export const CaseNoteFindUniqueSchema = z.object({
  where: CaseNoteWhereUniqueInputObjectSchema,
})
