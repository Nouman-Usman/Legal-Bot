import { z } from 'zod'
import { DocumentWhereInputObjectSchema } from './objects/DocumentWhereInput.schema'
import { DocumentOrderByWithAggregationInputObjectSchema } from './objects/DocumentOrderByWithAggregationInput.schema'
import { DocumentScalarWhereWithAggregatesInputObjectSchema } from './objects/DocumentScalarWhereWithAggregatesInput.schema'
import { DocumentScalarFieldEnumSchema } from './enums/DocumentScalarFieldEnum.schema'

export const DocumentGroupBySchema = z.object({
  where: DocumentWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DocumentOrderByWithAggregationInputObjectSchema,
      DocumentOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: DocumentScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DocumentScalarFieldEnumSchema),
})
