import { z } from 'zod'
import { CaseNoteWhereInputObjectSchema } from './objects/CaseNoteWhereInput.schema'
import { CaseNoteOrderByWithAggregationInputObjectSchema } from './objects/CaseNoteOrderByWithAggregationInput.schema'
import { CaseNoteScalarWhereWithAggregatesInputObjectSchema } from './objects/CaseNoteScalarWhereWithAggregatesInput.schema'
import { CaseNoteScalarFieldEnumSchema } from './enums/CaseNoteScalarFieldEnum.schema'

export const CaseNoteGroupBySchema = z.object({
  where: CaseNoteWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      CaseNoteOrderByWithAggregationInputObjectSchema,
      CaseNoteOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: CaseNoteScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(CaseNoteScalarFieldEnumSchema),
})
