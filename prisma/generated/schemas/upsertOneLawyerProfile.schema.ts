import { z } from 'zod'
import { LawyerProfileWhereUniqueInputObjectSchema } from './objects/LawyerProfileWhereUniqueInput.schema'
import { LawyerProfileCreateInputObjectSchema } from './objects/LawyerProfileCreateInput.schema'
import { LawyerProfileUncheckedCreateInputObjectSchema } from './objects/LawyerProfileUncheckedCreateInput.schema'
import { LawyerProfileUpdateInputObjectSchema } from './objects/LawyerProfileUpdateInput.schema'
import { LawyerProfileUncheckedUpdateInputObjectSchema } from './objects/LawyerProfileUncheckedUpdateInput.schema'

export const LawyerProfileUpsertSchema = z.object({
  where: LawyerProfileWhereUniqueInputObjectSchema,
  create: z.union([
    LawyerProfileCreateInputObjectSchema,
    LawyerProfileUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    LawyerProfileUpdateInputObjectSchema,
    LawyerProfileUncheckedUpdateInputObjectSchema,
  ]),
})
