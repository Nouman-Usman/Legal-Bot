import { z } from 'zod'
import { LawyerProfileWhereUniqueInputObjectSchema } from './LawyerProfileWhereUniqueInput.schema'
import { LawyerProfileUpdateWithoutUserInputObjectSchema } from './LawyerProfileUpdateWithoutUserInput.schema'
import { LawyerProfileUncheckedUpdateWithoutUserInputObjectSchema } from './LawyerProfileUncheckedUpdateWithoutUserInput.schema'
import { LawyerProfileCreateWithoutUserInputObjectSchema } from './LawyerProfileCreateWithoutUserInput.schema'
import { LawyerProfileUncheckedCreateWithoutUserInputObjectSchema } from './LawyerProfileUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => LawyerProfileWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => LawyerProfileUpdateWithoutUserInputObjectSchema),
        z.lazy(() => LawyerProfileUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => LawyerProfileCreateWithoutUserInputObjectSchema),
        z.lazy(() => LawyerProfileUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict()

export const LawyerProfileUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema
