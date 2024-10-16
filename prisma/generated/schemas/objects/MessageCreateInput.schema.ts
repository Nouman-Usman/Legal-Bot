import { z } from 'zod'
import { UserCreateNestedOneWithoutMessagesAsSenderInputObjectSchema } from './UserCreateNestedOneWithoutMessagesAsSenderInput.schema'
import { UserCreateNestedOneWithoutMessagesAsReceiverInputObjectSchema } from './UserCreateNestedOneWithoutMessagesAsReceiverInput.schema'
import { CaseCreateNestedOneWithoutMessagesInputObjectSchema } from './CaseCreateNestedOneWithoutMessagesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageCreateInput> = z
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
    case: z
      .lazy(() => CaseCreateNestedOneWithoutMessagesInputObjectSchema)
      .optional(),
  })
  .strict()

export const MessageCreateInputObjectSchema = Schema
