import { z } from 'zod'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'
import { CaseUpdateWithoutLawyerProfileInputObjectSchema } from './CaseUpdateWithoutLawyerProfileInput.schema'
import { CaseUncheckedUpdateWithoutLawyerProfileInputObjectSchema } from './CaseUncheckedUpdateWithoutLawyerProfileInput.schema'
import { CaseCreateWithoutLawyerProfileInputObjectSchema } from './CaseCreateWithoutLawyerProfileInput.schema'
import { CaseUncheckedCreateWithoutLawyerProfileInputObjectSchema } from './CaseUncheckedCreateWithoutLawyerProfileInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUpsertWithWhereUniqueWithoutLawyerProfileInput> =
  z
    .object({
      where: z.lazy(() => CaseWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => CaseUpdateWithoutLawyerProfileInputObjectSchema),
        z.lazy(() => CaseUncheckedUpdateWithoutLawyerProfileInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => CaseCreateWithoutLawyerProfileInputObjectSchema),
        z.lazy(() => CaseUncheckedCreateWithoutLawyerProfileInputObjectSchema),
      ]),
    })
    .strict()

export const CaseUpsertWithWhereUniqueWithoutLawyerProfileInputObjectSchema =
  Schema
