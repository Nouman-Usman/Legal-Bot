import { z } from 'zod'
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'
import { MessageUpdateWithoutSenderInputObjectSchema } from './MessageUpdateWithoutSenderInput.schema'
import { MessageUncheckedUpdateWithoutSenderInputObjectSchema } from './MessageUncheckedUpdateWithoutSenderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutSenderInput> =
  z
    .object({
      where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MessageUpdateWithoutSenderInputObjectSchema),
        z.lazy(() => MessageUncheckedUpdateWithoutSenderInputObjectSchema),
      ]),
    })
    .strict()

export const MessageUpdateWithWhereUniqueWithoutSenderInputObjectSchema = Schema
