import { z } from 'zod'
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'
import { MessageUpdateWithoutCaseInputObjectSchema } from './MessageUpdateWithoutCaseInput.schema'
import { MessageUncheckedUpdateWithoutCaseInputObjectSchema } from './MessageUncheckedUpdateWithoutCaseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutCaseInput> = z
  .object({
    where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => MessageUpdateWithoutCaseInputObjectSchema),
      z.lazy(() => MessageUncheckedUpdateWithoutCaseInputObjectSchema),
    ]),
  })
  .strict()

export const MessageUpdateWithWhereUniqueWithoutCaseInputObjectSchema = Schema
