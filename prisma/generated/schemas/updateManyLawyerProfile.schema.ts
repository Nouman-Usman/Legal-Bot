import { z } from 'zod'
import { LawyerProfileUpdateManyMutationInputObjectSchema } from './objects/LawyerProfileUpdateManyMutationInput.schema'
import { LawyerProfileWhereInputObjectSchema } from './objects/LawyerProfileWhereInput.schema'

export const LawyerProfileUpdateManySchema = z.object({
  data: LawyerProfileUpdateManyMutationInputObjectSchema,
  where: LawyerProfileWhereInputObjectSchema.optional(),
})
