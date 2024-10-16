import { z } from 'zod'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'
import { CaseUpdateWithoutLawyerProfileInputObjectSchema } from './CaseUpdateWithoutLawyerProfileInput.schema'
import { CaseUncheckedUpdateWithoutLawyerProfileInputObjectSchema } from './CaseUncheckedUpdateWithoutLawyerProfileInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUpdateWithWhereUniqueWithoutLawyerProfileInput> =
  z
    .object({
      where: z.lazy(() => CaseWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CaseUpdateWithoutLawyerProfileInputObjectSchema),
        z.lazy(() => CaseUncheckedUpdateWithoutLawyerProfileInputObjectSchema),
      ]),
    })
    .strict()

export const CaseUpdateWithWhereUniqueWithoutLawyerProfileInputObjectSchema =
  Schema
