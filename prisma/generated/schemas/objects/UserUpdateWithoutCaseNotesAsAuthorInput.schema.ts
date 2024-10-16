import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { UserStatusSchema } from '../enums/UserStatus.schema'
import { EnumUserStatusFieldUpdateOperationsInputObjectSchema } from './EnumUserStatusFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { OrganizationRoleUpdateManyWithoutUserNestedInputObjectSchema } from './OrganizationRoleUpdateManyWithoutUserNestedInput.schema'
import { LawyerProfileUpdateManyWithoutUserNestedInputObjectSchema } from './LawyerProfileUpdateManyWithoutUserNestedInput.schema'
import { CaseUpdateManyWithoutClientNestedInputObjectSchema } from './CaseUpdateManyWithoutClientNestedInput.schema'
import { MessageUpdateManyWithoutSenderNestedInputObjectSchema } from './MessageUpdateManyWithoutSenderNestedInput.schema'
import { MessageUpdateManyWithoutReceiverNestedInputObjectSchema } from './MessageUpdateManyWithoutReceiverNestedInput.schema'
import { DocumentUpdateManyWithoutUploaderNestedInputObjectSchema } from './DocumentUpdateManyWithoutUploaderNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateWithoutCaseNotesAsAuthorInput> = z
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
      .lazy(() => OrganizationRoleUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    lawyerProfiles: z
      .lazy(() => LawyerProfileUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    casesAsClient: z
      .lazy(() => CaseUpdateManyWithoutClientNestedInputObjectSchema)
      .optional(),
    messagesAsSender: z
      .lazy(() => MessageUpdateManyWithoutSenderNestedInputObjectSchema)
      .optional(),
    messagesAsReceiver: z
      .lazy(() => MessageUpdateManyWithoutReceiverNestedInputObjectSchema)
      .optional(),
    documentsAsUploader: z
      .lazy(() => DocumentUpdateManyWithoutUploaderNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const UserUpdateWithoutCaseNotesAsAuthorInputObjectSchema = Schema
