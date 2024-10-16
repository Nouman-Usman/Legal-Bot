import { z } from 'zod'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'
import { CaseCreateWithoutLawyerProfileInputObjectSchema } from './CaseCreateWithoutLawyerProfileInput.schema'
import { CaseUncheckedCreateWithoutLawyerProfileInputObjectSchema } from './CaseUncheckedCreateWithoutLawyerProfileInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseCreateOrConnectWithoutLawyerProfileInput> = z
  .object({
    where: z.lazy(() => CaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CaseCreateWithoutLawyerProfileInputObjectSchema),
      z.lazy(() => CaseUncheckedCreateWithoutLawyerProfileInputObjectSchema),
    ]),
  })
  .strict()

export const CaseCreateOrConnectWithoutLawyerProfileInputObjectSchema = Schema
