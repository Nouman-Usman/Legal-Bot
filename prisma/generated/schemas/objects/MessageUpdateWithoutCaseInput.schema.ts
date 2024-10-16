import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { UserUpdateOneWithoutMessagesAsSenderNestedInputObjectSchema } from './UserUpdateOneWithoutMessagesAsSenderNestedInput.schema'
import { UserUpdateOneWithoutMessagesAsReceiverNestedInputObjectSchema } from './UserUpdateOneWithoutMessagesAsReceiverNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageUpdateWithoutCaseInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    content: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    timestamp: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    sender: z
      .lazy(() => UserUpdateOneWithoutMessagesAsSenderNestedInputObjectSchema)
      .optional(),
    receiver: z
      .lazy(() => UserUpdateOneWithoutMessagesAsReceiverNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const MessageUpdateWithoutCaseInputObjectSchema = Schema
