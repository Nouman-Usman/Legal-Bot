import { z } from 'zod'
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'
import { MessageUpdateWithoutSenderInputObjectSchema } from './MessageUpdateWithoutSenderInput.schema'
import { MessageUncheckedUpdateWithoutSenderInputObjectSchema } from './MessageUncheckedUpdateWithoutSenderInput.schema'
import { MessageCreateWithoutSenderInputObjectSchema } from './MessageCreateWithoutSenderInput.schema'
import { MessageUncheckedCreateWithoutSenderInputObjectSchema } from './MessageUncheckedCreateWithoutSenderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutSenderInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MessageUpdateWithoutSenderInputObjectSchema),
        z.lazy(() => MessageUncheckedUpdateWithoutSenderInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MessageCreateWithoutSenderInputObjectSchema),
        z.lazy(() => MessageUncheckedCreateWithoutSenderInputObjectSchema),
      ]),
    })
    .strict()

export const MessageUpsertWithWhereUniqueWithoutSenderInputObjectSchema = Schema
