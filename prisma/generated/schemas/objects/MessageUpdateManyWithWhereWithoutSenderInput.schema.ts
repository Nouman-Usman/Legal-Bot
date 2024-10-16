import { z } from 'zod'
import { MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema'
import { MessageUpdateManyMutationInputObjectSchema } from './MessageUpdateManyMutationInput.schema'
import { MessageUncheckedUpdateManyWithoutMessagesAsSenderInputObjectSchema } from './MessageUncheckedUpdateManyWithoutMessagesAsSenderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutSenderInput> = z
  .object({
    where: z.lazy(() => MessageScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => MessageUpdateManyMutationInputObjectSchema),
      z.lazy(
        () =>
          MessageUncheckedUpdateManyWithoutMessagesAsSenderInputObjectSchema,
      ),
    ]),
  })
  .strict()

export const MessageUpdateManyWithWhereWithoutSenderInputObjectSchema = Schema
