import { z } from 'zod'
import { CaseUpdateInputObjectSchema } from './objects/CaseUpdateInput.schema'
import { CaseUncheckedUpdateInputObjectSchema } from './objects/CaseUncheckedUpdateInput.schema'
import { CaseWhereUniqueInputObjectSchema } from './objects/CaseWhereUniqueInput.schema'

export const CaseUpdateOneSchema = z.object({
  data: z.union([
    CaseUpdateInputObjectSchema,
    CaseUncheckedUpdateInputObjectSchema,
  ]),
  where: CaseWhereUniqueInputObjectSchema,
})
