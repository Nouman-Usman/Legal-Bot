import { z } from 'zod'
import { LawyerProfileWhereUniqueInputObjectSchema } from './LawyerProfileWhereUniqueInput.schema'
import { LawyerProfileCreateWithoutCasesInputObjectSchema } from './LawyerProfileCreateWithoutCasesInput.schema'
import { LawyerProfileUncheckedCreateWithoutCasesInputObjectSchema } from './LawyerProfileUncheckedCreateWithoutCasesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileCreateOrConnectWithoutCasesInput> =
  z
    .object({
      where: z.lazy(() => LawyerProfileWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => LawyerProfileCreateWithoutCasesInputObjectSchema),
        z.lazy(() => LawyerProfileUncheckedCreateWithoutCasesInputObjectSchema),
      ]),
    })
    .strict()

export const LawyerProfileCreateOrConnectWithoutCasesInputObjectSchema = Schema
