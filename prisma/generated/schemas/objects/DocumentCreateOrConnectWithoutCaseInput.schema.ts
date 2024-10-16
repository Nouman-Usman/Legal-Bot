import { z } from 'zod'
import { DocumentWhereUniqueInputObjectSchema } from './DocumentWhereUniqueInput.schema'
import { DocumentCreateWithoutCaseInputObjectSchema } from './DocumentCreateWithoutCaseInput.schema'
import { DocumentUncheckedCreateWithoutCaseInputObjectSchema } from './DocumentUncheckedCreateWithoutCaseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutCaseInput> = z
  .object({
    where: z.lazy(() => DocumentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DocumentCreateWithoutCaseInputObjectSchema),
      z.lazy(() => DocumentUncheckedCreateWithoutCaseInputObjectSchema),
    ]),
  })
  .strict()

export const DocumentCreateOrConnectWithoutCaseInputObjectSchema = Schema
