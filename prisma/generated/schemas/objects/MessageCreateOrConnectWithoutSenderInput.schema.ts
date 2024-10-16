import { z } from 'zod'
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'
import { MessageCreateWithoutSenderInputObjectSchema } from './MessageCreateWithoutSenderInput.schema'
import { MessageUncheckedCreateWithoutSenderInputObjectSchema } from './MessageUncheckedCreateWithoutSenderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageCreateOrConnectWithoutSenderInput> = z
  .object({
    where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MessageCreateWithoutSenderInputObjectSchema),
      z.lazy(() => MessageUncheckedCreateWithoutSenderInputObjectSchema),
    ]),
  })
  .strict()

export const MessageCreateOrConnectWithoutSenderInputObjectSchema = Schema
