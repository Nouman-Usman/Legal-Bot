import { z } from 'zod'
import { CaseOrderByWithRelationInputObjectSchema } from './objects/CaseOrderByWithRelationInput.schema'
import { CaseWhereInputObjectSchema } from './objects/CaseWhereInput.schema'
import { CaseWhereUniqueInputObjectSchema } from './objects/CaseWhereUniqueInput.schema'
import { CaseCountAggregateInputObjectSchema } from './objects/CaseCountAggregateInput.schema'
import { CaseMinAggregateInputObjectSchema } from './objects/CaseMinAggregateInput.schema'
import { CaseMaxAggregateInputObjectSchema } from './objects/CaseMaxAggregateInput.schema'

export const CaseAggregateSchema = z.object({
  orderBy: z
    .union([
      CaseOrderByWithRelationInputObjectSchema,
      CaseOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CaseWhereInputObjectSchema.optional(),
  cursor: CaseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), CaseCountAggregateInputObjectSchema])
    .optional(),
  _min: CaseMinAggregateInputObjectSchema.optional(),
  _max: CaseMaxAggregateInputObjectSchema.optional(),
})
