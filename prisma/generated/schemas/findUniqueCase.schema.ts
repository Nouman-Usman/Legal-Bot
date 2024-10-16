import { z } from 'zod'
import { CaseWhereUniqueInputObjectSchema } from './objects/CaseWhereUniqueInput.schema'

export const CaseFindUniqueSchema = z.object({
  where: CaseWhereUniqueInputObjectSchema,
})
