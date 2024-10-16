import { z } from 'zod'
import { CaseWhereUniqueInputObjectSchema } from './objects/CaseWhereUniqueInput.schema'
import { CaseCreateInputObjectSchema } from './objects/CaseCreateInput.schema'
import { CaseUncheckedCreateInputObjectSchema } from './objects/CaseUncheckedCreateInput.schema'
import { CaseUpdateInputObjectSchema } from './objects/CaseUpdateInput.schema'
import { CaseUncheckedUpdateInputObjectSchema } from './objects/CaseUncheckedUpdateInput.schema'

export const CaseUpsertSchema = z.object({
  where: CaseWhereUniqueInputObjectSchema,
  create: z.union([
    CaseCreateInputObjectSchema,
    CaseUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    CaseUpdateInputObjectSchema,
    CaseUncheckedUpdateInputObjectSchema,
  ]),
})
