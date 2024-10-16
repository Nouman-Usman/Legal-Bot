import { z } from 'zod'
import { LawyerProfileOrderByWithRelationInputObjectSchema } from './objects/LawyerProfileOrderByWithRelationInput.schema'
import { LawyerProfileWhereInputObjectSchema } from './objects/LawyerProfileWhereInput.schema'
import { LawyerProfileWhereUniqueInputObjectSchema } from './objects/LawyerProfileWhereUniqueInput.schema'
import { LawyerProfileScalarFieldEnumSchema } from './enums/LawyerProfileScalarFieldEnum.schema'

export const LawyerProfileFindManySchema = z.object({
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
  distinct: z.array(LawyerProfileScalarFieldEnumSchema).optional(),
})
