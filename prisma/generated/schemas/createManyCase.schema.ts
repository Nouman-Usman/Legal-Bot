import { z } from 'zod'
import { CaseCreateManyInputObjectSchema } from './objects/CaseCreateManyInput.schema'

export const CaseCreateManySchema = z.object({
  data: z.union([
    CaseCreateManyInputObjectSchema,
    z.array(CaseCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
})
