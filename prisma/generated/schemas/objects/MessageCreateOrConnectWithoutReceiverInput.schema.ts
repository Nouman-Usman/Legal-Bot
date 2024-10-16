import { z } from 'zod'
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'
import { MessageCreateWithoutReceiverInputObjectSchema } from './MessageCreateWithoutReceiverInput.schema'
import { MessageUncheckedCreateWithoutReceiverInputObjectSchema } from './MessageUncheckedCreateWithoutReceiverInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageCreateOrConnectWithoutReceiverInput> = z
  .object({
    where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MessageCreateWithoutReceiverInputObjectSchema),
      z.lazy(() => MessageUncheckedCreateWithoutReceiverInputObjectSchema),
    ]),
  })
  .strict()

export const MessageCreateOrConnectWithoutReceiverInputObjectSchema = Schema
