import { z } from 'zod'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'
import { CaseCreateWithoutClientInputObjectSchema } from './CaseCreateWithoutClientInput.schema'
import { CaseUncheckedCreateWithoutClientInputObjectSchema } from './CaseUncheckedCreateWithoutClientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseCreateOrConnectWithoutClientInput> = z
  .object({
    where: z.lazy(() => CaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CaseCreateWithoutClientInputObjectSchema),
      z.lazy(() => CaseUncheckedCreateWithoutClientInputObjectSchema),
    ]),
  })
  .strict()

export const CaseCreateOrConnectWithoutClientInputObjectSchema = Schema
