import { z } from 'zod'
import { UserCreateNestedOneWithoutMessagesAsSenderInputObjectSchema } from './UserCreateNestedOneWithoutMessagesAsSenderInput.schema'
import { UserCreateNestedOneWithoutMessagesAsReceiverInputObjectSchema } from './UserCreateNestedOneWithoutMessagesAsReceiverInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageCreateWithoutCaseInput> = z
  .object({
    id: z.string().optional(),
    content: z.string().optional().nullable(),
    timestamp: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sender: z
      .lazy(() => UserCreateNestedOneWithoutMessagesAsSenderInputObjectSchema)
      .optional(),
    receiver: z
      .lazy(() => UserCreateNestedOneWithoutMessagesAsReceiverInputObjectSchema)
      .optional(),
  })
  .strict()

export const MessageCreateWithoutCaseInputObjectSchema = Schema
