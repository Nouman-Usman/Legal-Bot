import { z } from 'zod'
import { CaseWhereUniqueInputObjectSchema } from './objects/CaseWhereUniqueInput.schema'

export const CaseDeleteOneSchema = z.object({
  where: CaseWhereUniqueInputObjectSchema,
})
