import { z } from 'zod'
import { LawyerProfileWhereUniqueInputObjectSchema } from './objects/LawyerProfileWhereUniqueInput.schema'

export const LawyerProfileFindUniqueSchema = z.object({
  where: LawyerProfileWhereUniqueInputObjectSchema,
})
