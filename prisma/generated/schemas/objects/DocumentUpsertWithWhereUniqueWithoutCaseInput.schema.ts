import { z } from 'zod'
import { DocumentWhereUniqueInputObjectSchema } from './DocumentWhereUniqueInput.schema'
import { DocumentUpdateWithoutCaseInputObjectSchema } from './DocumentUpdateWithoutCaseInput.schema'
import { DocumentUncheckedUpdateWithoutCaseInputObjectSchema } from './DocumentUncheckedUpdateWithoutCaseInput.schema'
import { DocumentCreateWithoutCaseInputObjectSchema } from './DocumentCreateWithoutCaseInput.schema'
import { DocumentUncheckedCreateWithoutCaseInputObjectSchema } from './DocumentUncheckedCreateWithoutCaseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DocumentUpsertWithWhereUniqueWithoutCaseInput> =
  z
    .object({
      where: z.lazy(() => DocumentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DocumentUpdateWithoutCaseInputObjectSchema),
        z.lazy(() => DocumentUncheckedUpdateWithoutCaseInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => DocumentCreateWithoutCaseInputObjectSchema),
        z.lazy(() => DocumentUncheckedCreateWithoutCaseInputObjectSchema),
      ]),
    })
    .strict()

export const DocumentUpsertWithWhereUniqueWithoutCaseInputObjectSchema = Schema
