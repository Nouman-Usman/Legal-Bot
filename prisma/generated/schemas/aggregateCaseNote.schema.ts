import { z } from 'zod'
import { CaseNoteOrderByWithRelationInputObjectSchema } from './objects/CaseNoteOrderByWithRelationInput.schema'
import { CaseNoteWhereInputObjectSchema } from './objects/CaseNoteWhereInput.schema'
import { CaseNoteWhereUniqueInputObjectSchema } from './objects/CaseNoteWhereUniqueInput.schema'
import { CaseNoteCountAggregateInputObjectSchema } from './objects/CaseNoteCountAggregateInput.schema'
import { CaseNoteMinAggregateInputObjectSchema } from './objects/CaseNoteMinAggregateInput.schema'
import { CaseNoteMaxAggregateInputObjectSchema } from './objects/CaseNoteMaxAggregateInput.schema'

export const CaseNoteAggregateSchema = z.object({
  orderBy: z
    .union([
      CaseNoteOrderByWithRelationInputObjectSchema,
      CaseNoteOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CaseNoteWhereInputObjectSchema.optional(),
  cursor: CaseNoteWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), CaseNoteCountAggregateInputObjectSchema])
    .optional(),
  _min: CaseNoteMinAggregateInputObjectSchema.optional(),
  _max: CaseNoteMaxAggregateInputObjectSchema.optional(),
})
