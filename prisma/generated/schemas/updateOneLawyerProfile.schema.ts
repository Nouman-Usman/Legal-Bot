import { z } from 'zod'
import { LawyerProfileUpdateInputObjectSchema } from './objects/LawyerProfileUpdateInput.schema'
import { LawyerProfileUncheckedUpdateInputObjectSchema } from './objects/LawyerProfileUncheckedUpdateInput.schema'
import { LawyerProfileWhereUniqueInputObjectSchema } from './objects/LawyerProfileWhereUniqueInput.schema'

export const LawyerProfileUpdateOneSchema = z.object({
  data: z.union([
    LawyerProfileUpdateInputObjectSchema,
    LawyerProfileUncheckedUpdateInputObjectSchema,
  ]),
  where: LawyerProfileWhereUniqueInputObjectSchema,
})
