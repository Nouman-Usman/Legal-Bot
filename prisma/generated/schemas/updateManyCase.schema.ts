import { z } from 'zod'
import { CaseUpdateManyMutationInputObjectSchema } from './objects/CaseUpdateManyMutationInput.schema'
import { CaseWhereInputObjectSchema } from './objects/CaseWhereInput.schema'

export const CaseUpdateManySchema = z.object({
  data: CaseUpdateManyMutationInputObjectSchema,
  where: CaseWhereInputObjectSchema.optional(),
})
