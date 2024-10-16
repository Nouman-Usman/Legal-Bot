import { z } from 'zod'
import { LawyerProfileWhereInputObjectSchema } from './objects/LawyerProfileWhereInput.schema'

export const LawyerProfileDeleteManySchema = z.object({
  where: LawyerProfileWhereInputObjectSchema.optional(),
})
