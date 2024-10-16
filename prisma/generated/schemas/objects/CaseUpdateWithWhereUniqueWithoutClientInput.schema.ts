import { z } from 'zod'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'
import { CaseUpdateWithoutClientInputObjectSchema } from './CaseUpdateWithoutClientInput.schema'
import { CaseUncheckedUpdateWithoutClientInputObjectSchema } from './CaseUncheckedUpdateWithoutClientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUpdateWithWhereUniqueWithoutClientInput> = z
  .object({
    where: z.lazy(() => CaseWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => CaseUpdateWithoutClientInputObjectSchema),
      z.lazy(() => CaseUncheckedUpdateWithoutClientInputObjectSchema),
    ]),
  })
  .strict()

export const CaseUpdateWithWhereUniqueWithoutClientInputObjectSchema = Schema
