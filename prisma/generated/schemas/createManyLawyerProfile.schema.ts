import { z } from 'zod'
import { LawyerProfileCreateManyInputObjectSchema } from './objects/LawyerProfileCreateManyInput.schema'

export const LawyerProfileCreateManySchema = z.object({
  data: z.union([
    LawyerProfileCreateManyInputObjectSchema,
    z.array(LawyerProfileCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
})
