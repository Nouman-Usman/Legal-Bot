import { z } from 'zod'
import { LawyerProfileUpdateWithoutCasesInputObjectSchema } from './LawyerProfileUpdateWithoutCasesInput.schema'
import { LawyerProfileUncheckedUpdateWithoutCasesInputObjectSchema } from './LawyerProfileUncheckedUpdateWithoutCasesInput.schema'
import { LawyerProfileCreateWithoutCasesInputObjectSchema } from './LawyerProfileCreateWithoutCasesInput.schema'
import { LawyerProfileUncheckedCreateWithoutCasesInputObjectSchema } from './LawyerProfileUncheckedCreateWithoutCasesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileUpsertWithoutCasesInput> = z
  .object({
    update: z.union([
      z.lazy(() => LawyerProfileUpdateWithoutCasesInputObjectSchema),
      z.lazy(() => LawyerProfileUncheckedUpdateWithoutCasesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LawyerProfileCreateWithoutCasesInputObjectSchema),
      z.lazy(() => LawyerProfileUncheckedCreateWithoutCasesInputObjectSchema),
    ]),
  })
  .strict()

export const LawyerProfileUpsertWithoutCasesInputObjectSchema = Schema
