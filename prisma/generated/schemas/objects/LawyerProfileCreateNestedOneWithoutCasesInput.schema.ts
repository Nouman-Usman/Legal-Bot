import { z } from 'zod'
import { LawyerProfileCreateWithoutCasesInputObjectSchema } from './LawyerProfileCreateWithoutCasesInput.schema'
import { LawyerProfileUncheckedCreateWithoutCasesInputObjectSchema } from './LawyerProfileUncheckedCreateWithoutCasesInput.schema'
import { LawyerProfileCreateOrConnectWithoutCasesInputObjectSchema } from './LawyerProfileCreateOrConnectWithoutCasesInput.schema'
import { LawyerProfileWhereUniqueInputObjectSchema } from './LawyerProfileWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileCreateNestedOneWithoutCasesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LawyerProfileCreateWithoutCasesInputObjectSchema),
          z.lazy(
            () => LawyerProfileUncheckedCreateWithoutCasesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => LawyerProfileCreateOrConnectWithoutCasesInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => LawyerProfileWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict()

export const LawyerProfileCreateNestedOneWithoutCasesInputObjectSchema = Schema
