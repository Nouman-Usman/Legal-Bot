import { z } from 'zod'
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'
import { MessageUpdateWithoutCaseInputObjectSchema } from './MessageUpdateWithoutCaseInput.schema'
import { MessageUncheckedUpdateWithoutCaseInputObjectSchema } from './MessageUncheckedUpdateWithoutCaseInput.schema'
import { MessageCreateWithoutCaseInputObjectSchema } from './MessageCreateWithoutCaseInput.schema'
import { MessageUncheckedCreateWithoutCaseInputObjectSchema } from './MessageUncheckedCreateWithoutCaseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutCaseInput> = z
  .object({
    where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => MessageUpdateWithoutCaseInputObjectSchema),
      z.lazy(() => MessageUncheckedUpdateWithoutCaseInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MessageCreateWithoutCaseInputObjectSchema),
      z.lazy(() => MessageUncheckedCreateWithoutCaseInputObjectSchema),
    ]),
  })
  .strict()

export const MessageUpsertWithWhereUniqueWithoutCaseInputObjectSchema = Schema
