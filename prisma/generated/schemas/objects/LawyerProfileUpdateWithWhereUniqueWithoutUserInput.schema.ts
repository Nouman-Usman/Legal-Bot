import { z } from 'zod'
import { LawyerProfileWhereUniqueInputObjectSchema } from './LawyerProfileWhereUniqueInput.schema'
import { LawyerProfileUpdateWithoutUserInputObjectSchema } from './LawyerProfileUpdateWithoutUserInput.schema'
import { LawyerProfileUncheckedUpdateWithoutUserInputObjectSchema } from './LawyerProfileUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => LawyerProfileWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => LawyerProfileUpdateWithoutUserInputObjectSchema),
        z.lazy(() => LawyerProfileUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict()

export const LawyerProfileUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema
