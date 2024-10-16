import { z } from 'zod'
import { LawyerProfileWhereUniqueInputObjectSchema } from './objects/LawyerProfileWhereUniqueInput.schema'

export const LawyerProfileDeleteOneSchema = z.object({
  where: LawyerProfileWhereUniqueInputObjectSchema,
})
