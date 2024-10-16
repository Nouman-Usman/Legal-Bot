import { z } from 'zod'
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'
import { MessageUpdateWithoutReceiverInputObjectSchema } from './MessageUpdateWithoutReceiverInput.schema'
import { MessageUncheckedUpdateWithoutReceiverInputObjectSchema } from './MessageUncheckedUpdateWithoutReceiverInput.schema'
import { MessageCreateWithoutReceiverInputObjectSchema } from './MessageCreateWithoutReceiverInput.schema'
import { MessageUncheckedCreateWithoutReceiverInputObjectSchema } from './MessageUncheckedCreateWithoutReceiverInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutReceiverInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MessageUpdateWithoutReceiverInputObjectSchema),
        z.lazy(() => MessageUncheckedUpdateWithoutReceiverInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MessageCreateWithoutReceiverInputObjectSchema),
        z.lazy(() => MessageUncheckedCreateWithoutReceiverInputObjectSchema),
      ]),
    })
    .strict()

export const MessageUpsertWithWhereUniqueWithoutReceiverInputObjectSchema =
  Schema
