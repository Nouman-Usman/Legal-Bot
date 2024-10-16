import { z } from 'zod'
import { CaseOrderByWithRelationInputObjectSchema } from './objects/CaseOrderByWithRelationInput.schema'
import { CaseWhereInputObjectSchema } from './objects/CaseWhereInput.schema'
import { CaseWhereUniqueInputObjectSchema } from './objects/CaseWhereUniqueInput.schema'
import { CaseScalarFieldEnumSchema } from './enums/CaseScalarFieldEnum.schema'

export const CaseFindManySchema = z.object({
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
  distinct: z.array(CaseScalarFieldEnumSchema).optional(),
})
