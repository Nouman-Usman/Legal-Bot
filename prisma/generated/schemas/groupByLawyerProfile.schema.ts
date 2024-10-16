import { z } from 'zod'
import { LawyerProfileWhereInputObjectSchema } from './objects/LawyerProfileWhereInput.schema'
import { LawyerProfileOrderByWithAggregationInputObjectSchema } from './objects/LawyerProfileOrderByWithAggregationInput.schema'
import { LawyerProfileScalarWhereWithAggregatesInputObjectSchema } from './objects/LawyerProfileScalarWhereWithAggregatesInput.schema'
import { LawyerProfileScalarFieldEnumSchema } from './enums/LawyerProfileScalarFieldEnum.schema'

export const LawyerProfileGroupBySchema = z.object({
  where: LawyerProfileWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      LawyerProfileOrderByWithAggregationInputObjectSchema,
      LawyerProfileOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: LawyerProfileScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(LawyerProfileScalarFieldEnumSchema),
})
