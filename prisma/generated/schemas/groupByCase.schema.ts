import { z } from 'zod'
import { CaseWhereInputObjectSchema } from './objects/CaseWhereInput.schema'
import { CaseOrderByWithAggregationInputObjectSchema } from './objects/CaseOrderByWithAggregationInput.schema'
import { CaseScalarWhereWithAggregatesInputObjectSchema } from './objects/CaseScalarWhereWithAggregatesInput.schema'
import { CaseScalarFieldEnumSchema } from './enums/CaseScalarFieldEnum.schema'

export const CaseGroupBySchema = z.object({
  where: CaseWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      CaseOrderByWithAggregationInputObjectSchema,
      CaseOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: CaseScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(CaseScalarFieldEnumSchema),
})
