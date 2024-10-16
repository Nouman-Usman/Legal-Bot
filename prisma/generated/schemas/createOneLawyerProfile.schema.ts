import { z } from 'zod'
import { LawyerProfileCreateInputObjectSchema } from './objects/LawyerProfileCreateInput.schema'
import { LawyerProfileUncheckedCreateInputObjectSchema } from './objects/LawyerProfileUncheckedCreateInput.schema'

export const LawyerProfileCreateOneSchema = z.object({
  data: z.union([
    LawyerProfileCreateInputObjectSchema,
    LawyerProfileUncheckedCreateInputObjectSchema,
  ]),
})
