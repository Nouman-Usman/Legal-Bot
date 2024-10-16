import { z } from 'zod'
import { CaseScalarWhereInputObjectSchema } from './CaseScalarWhereInput.schema'
import { CaseUpdateManyMutationInputObjectSchema } from './CaseUpdateManyMutationInput.schema'
import { CaseUncheckedUpdateManyWithoutCasesInputObjectSchema } from './CaseUncheckedUpdateManyWithoutCasesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUpdateManyWithWhereWithoutLawyerProfileInput> =
  z
    .object({
      where: z.lazy(() => CaseScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => CaseUpdateManyMutationInputObjectSchema),
        z.lazy(() => CaseUncheckedUpdateManyWithoutCasesInputObjectSchema),
      ]),
    })
    .strict()

export const CaseUpdateManyWithWhereWithoutLawyerProfileInputObjectSchema =
  Schema
