import { z } from 'zod'
import { LawyerProfileOrderByWithRelationInputObjectSchema } from './objects/LawyerProfileOrderByWithRelationInput.schema'
import { LawyerProfileWhereInputObjectSchema } from './objects/LawyerProfileWhereInput.schema'
import { LawyerProfileWhereUniqueInputObjectSchema } from './objects/LawyerProfileWhereUniqueInput.schema'
import { LawyerProfileCountAggregateInputObjectSchema } from './objects/LawyerProfileCountAggregateInput.schema'
import { LawyerProfileMinAggregateInputObjectSchema } from './objects/LawyerProfileMinAggregateInput.schema'
import { LawyerProfileMaxAggregateInputObjectSchema } from './objects/LawyerProfileMaxAggregateInput.schema'
import { LawyerProfileAvgAggregateInputObjectSchema } from './objects/LawyerProfileAvgAggregateInput.schema'
import { LawyerProfileSumAggregateInputObjectSchema } from './objects/LawyerProfileSumAggregateInput.schema'

export const LawyerProfileAggregateSchema = z.object({
  orderBy: z
    .union([
      LawyerProfileOrderByWithRelationInputObjectSchema,
      LawyerProfileOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: LawyerProfileWhereInputObjectSchema.optional(),
  cursor: LawyerProfileWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), LawyerProfileCountAggregateInputObjectSchema])
    .optional(),
  _min: LawyerProfileMinAggregateInputObjectSchema.optional(),
  _max: LawyerProfileMaxAggregateInputObjectSchema.optional(),
  _avg: LawyerProfileAvgAggregateInputObjectSchema.optional(),
  _sum: LawyerProfileSumAggregateInputObjectSchema.optional(),
})
