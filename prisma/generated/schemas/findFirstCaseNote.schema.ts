import { z } from 'zod'
import { CaseNoteOrderByWithRelationInputObjectSchema } from './objects/CaseNoteOrderByWithRelationInput.schema'
import { CaseNoteWhereInputObjectSchema } from './objects/CaseNoteWhereInput.schema'
import { CaseNoteWhereUniqueInputObjectSchema } from './objects/CaseNoteWhereUniqueInput.schema'
import { CaseNoteScalarFieldEnumSchema } from './enums/CaseNoteScalarFieldEnum.schema'

export const CaseNoteFindFirstSchema = z.object({
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
  distinct: z.array(CaseNoteScalarFieldEnumSchema).optional(),
})
