import { z } from 'zod'
import { LawyerProfileCreateWithoutCasesInputObjectSchema } from './LawyerProfileCreateWithoutCasesInput.schema'
import { LawyerProfileUncheckedCreateWithoutCasesInputObjectSchema } from './LawyerProfileUncheckedCreateWithoutCasesInput.schema'
import { LawyerProfileCreateOrConnectWithoutCasesInputObjectSchema } from './LawyerProfileCreateOrConnectWithoutCasesInput.schema'
import { LawyerProfileUpsertWithoutCasesInputObjectSchema } from './LawyerProfileUpsertWithoutCasesInput.schema'
import { LawyerProfileWhereUniqueInputObjectSchema } from './LawyerProfileWhereUniqueInput.schema'
import { LawyerProfileUpdateWithoutCasesInputObjectSchema } from './LawyerProfileUpdateWithoutCasesInput.schema'
import { LawyerProfileUncheckedUpdateWithoutCasesInputObjectSchema } from './LawyerProfileUncheckedUpdateWithoutCasesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileUpdateOneWithoutCasesNestedInput> =
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
      upsert: z
        .lazy(() => LawyerProfileUpsertWithoutCasesInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => LawyerProfileWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => LawyerProfileUpdateWithoutCasesInputObjectSchema),
          z.lazy(
            () => LawyerProfileUncheckedUpdateWithoutCasesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict()

export const LawyerProfileUpdateOneWithoutCasesNestedInputObjectSchema = Schema
