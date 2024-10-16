import { z } from 'zod'
import { DocumentWhereUniqueInputObjectSchema } from './DocumentWhereUniqueInput.schema'
import { DocumentUpdateWithoutCaseInputObjectSchema } from './DocumentUpdateWithoutCaseInput.schema'
import { DocumentUncheckedUpdateWithoutCaseInputObjectSchema } from './DocumentUncheckedUpdateWithoutCaseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DocumentUpdateWithWhereUniqueWithoutCaseInput> =
  z
    .object({
      where: z.lazy(() => DocumentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DocumentUpdateWithoutCaseInputObjectSchema),
        z.lazy(() => DocumentUncheckedUpdateWithoutCaseInputObjectSchema),
      ]),
    })
    .strict()

export const DocumentUpdateWithWhereUniqueWithoutCaseInputObjectSchema = Schema
