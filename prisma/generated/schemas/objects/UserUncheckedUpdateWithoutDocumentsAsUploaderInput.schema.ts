import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { UserStatusSchema } from '../enums/UserStatus.schema'
import { EnumUserStatusFieldUpdateOperationsInputObjectSchema } from './EnumUserStatusFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { OrganizationRoleUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './OrganizationRoleUncheckedUpdateManyWithoutUserNestedInput.schema'
import { LawyerProfileUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './LawyerProfileUncheckedUpdateManyWithoutUserNestedInput.schema'
import { CaseUncheckedUpdateManyWithoutClientNestedInputObjectSchema } from './CaseUncheckedUpdateManyWithoutClientNestedInput.schema'
import { CaseNoteUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from './CaseNoteUncheckedUpdateManyWithoutAuthorNestedInput.schema'
import { MessageUncheckedUpdateManyWithoutSenderNestedInputObjectSchema } from './MessageUncheckedUpdateManyWithoutSenderNestedInput.schema'
import { MessageUncheckedUpdateManyWithoutReceiverNestedInputObjectSchema } from './MessageUncheckedUpdateManyWithoutReceiverNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutDocumentsAsUploaderInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      email: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      pictureUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      tokenInvitation: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      stripeCustomerId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      status: z
        .union([
          z.lazy(() => UserStatusSchema),
          z.lazy(() => EnumUserStatusFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      globalRole: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
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
      organizationRoles: z
        .lazy(
          () =>
            OrganizationRoleUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      lawyerProfiles: z
        .lazy(
          () =>
            LawyerProfileUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
      casesAsClient: z
        .lazy(() => CaseUncheckedUpdateManyWithoutClientNestedInputObjectSchema)
        .optional(),
      caseNotesAsAuthor: z
        .lazy(
          () => CaseNoteUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema,
        )
        .optional(),
      messagesAsSender: z
        .lazy(
          () => MessageUncheckedUpdateManyWithoutSenderNestedInputObjectSchema,
        )
        .optional(),
      messagesAsReceiver: z
        .lazy(
          () =>
            MessageUncheckedUpdateManyWithoutReceiverNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict()

export const UserUncheckedUpdateWithoutDocumentsAsUploaderInputObjectSchema =
  Schema
