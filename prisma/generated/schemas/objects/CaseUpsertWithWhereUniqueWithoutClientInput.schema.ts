import { z } from 'zod'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'
import { CaseUpdateWithoutClientInputObjectSchema } from './CaseUpdateWithoutClientInput.schema'
import { CaseUncheckedUpdateWithoutClientInputObjectSchema } from './CaseUncheckedUpdateWithoutClientInput.schema'
import { CaseCreateWithoutClientInputObjectSchema } from './CaseCreateWithoutClientInput.schema'
import { CaseUncheckedCreateWithoutClientInputObjectSchema } from './CaseUncheckedCreateWithoutClientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUpsertWithWhereUniqueWithoutClientInput> = z
  .object({
    where: z.lazy(() => CaseWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => CaseUpdateWithoutClientInputObjectSchema),
      z.lazy(() => CaseUncheckedUpdateWithoutClientInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CaseCreateWithoutClientInputObjectSchema),
      z.lazy(() => CaseUncheckedCreateWithoutClientInputObjectSchema),
    ]),
  })
  .strict()

export const CaseUpsertWithWhereUniqueWithoutClientInputObjectSchema = Schema
