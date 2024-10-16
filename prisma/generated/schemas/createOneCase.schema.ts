import { z } from 'zod'
import { CaseCreateInputObjectSchema } from './objects/CaseCreateInput.schema'
import { CaseUncheckedCreateInputObjectSchema } from './objects/CaseUncheckedCreateInput.schema'

export const CaseCreateOneSchema = z.object({
  data: z.union([
    CaseCreateInputObjectSchema,
    CaseUncheckedCreateInputObjectSchema,
  ]),
})
