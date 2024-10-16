import { z } from 'zod'
import { CaseWhereInputObjectSchema } from './objects/CaseWhereInput.schema'

export const CaseDeleteManySchema = z.object({
  where: CaseWhereInputObjectSchema.optional(),
})
