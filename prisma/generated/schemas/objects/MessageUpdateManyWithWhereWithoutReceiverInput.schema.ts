import { z } from 'zod'
import { MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema'
import { MessageUpdateManyMutationInputObjectSchema } from './MessageUpdateManyMutationInput.schema'
import { MessageUncheckedUpdateManyWithoutMessagesAsReceiverInputObjectSchema } from './MessageUncheckedUpdateManyWithoutMessagesAsReceiverInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutReceiverInput> =
  z
    .object({
      where: z.lazy(() => MessageScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MessageUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            MessageUncheckedUpdateManyWithoutMessagesAsReceiverInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const MessageUpdateManyWithWhereWithoutReceiverInputObjectSchema = Schema
