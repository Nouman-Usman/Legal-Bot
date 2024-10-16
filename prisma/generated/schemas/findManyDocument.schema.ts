import { z } from 'zod'
import { DocumentOrderByWithRelationInputObjectSchema } from './objects/DocumentOrderByWithRelationInput.schema'
import { DocumentWhereInputObjectSchema } from './objects/DocumentWhereInput.schema'
import { DocumentWhereUniqueInputObjectSchema } from './objects/DocumentWhereUniqueInput.schema'
import { DocumentScalarFieldEnumSchema } from './enums/DocumentScalarFieldEnum.schema'

export const DocumentFindManySchema = z.object({
  orderBy: z
    .union([
      DocumentOrderByWithRelationInputObjectSchema,
      DocumentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DocumentWhereInputObjectSchema.optional(),
  cursor: DocumentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DocumentScalarFieldEnumSchema).optional(),
})
