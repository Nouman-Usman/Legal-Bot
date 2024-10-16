import { z } from 'zod'
import { CaseScalarWhereInputObjectSchema } from './CaseScalarWhereInput.schema'
import { CaseUpdateManyMutationInputObjectSchema } from './CaseUpdateManyMutationInput.schema'
import { CaseUncheckedUpdateManyWithoutCasesAsClientInputObjectSchema } from './CaseUncheckedUpdateManyWithoutCasesAsClientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUpdateManyWithWhereWithoutClientInput> = z
  .object({
    where: z.lazy(() => CaseScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => CaseUpdateManyMutationInputObjectSchema),
      z.lazy(
        () => CaseUncheckedUpdateManyWithoutCasesAsClientInputObjectSchema,
      ),
    ]),
  })
  .strict()

export const CaseUpdateManyWithWhereWithoutClientInputObjectSchema = Schema
