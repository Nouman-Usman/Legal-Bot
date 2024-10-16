import { z } from 'zod'
import { LawyerProfileWhereUniqueInputObjectSchema } from './LawyerProfileWhereUniqueInput.schema'
import { LawyerProfileCreateWithoutUserInputObjectSchema } from './LawyerProfileCreateWithoutUserInput.schema'
import { LawyerProfileUncheckedCreateWithoutUserInputObjectSchema } from './LawyerProfileUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => LawyerProfileWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LawyerProfileCreateWithoutUserInputObjectSchema),
      z.lazy(() => LawyerProfileUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const LawyerProfileCreateOrConnectWithoutUserInputObjectSchema = Schema
