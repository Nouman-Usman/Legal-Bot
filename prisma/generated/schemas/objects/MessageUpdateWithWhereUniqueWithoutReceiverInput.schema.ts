import { z } from 'zod'
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'
import { MessageUpdateWithoutReceiverInputObjectSchema } from './MessageUpdateWithoutReceiverInput.schema'
import { MessageUncheckedUpdateWithoutReceiverInputObjectSchema } from './MessageUncheckedUpdateWithoutReceiverInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutReceiverInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MessageUpdateWithoutReceiverInputObjectSchema),
        z.lazy(() => MessageUncheckedUpdateWithoutReceiverInputObjectSchema),
      ]),
    })
    .strict()

export const MessageUpdateWithWhereUniqueWithoutReceiverInputObjectSchema =
  Schema
