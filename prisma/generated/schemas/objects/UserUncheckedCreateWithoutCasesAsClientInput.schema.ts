import { z } from 'zod'
import { UserStatusSchema } from '../enums/UserStatus.schema'
import { OrganizationRoleUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './OrganizationRoleUncheckedCreateNestedManyWithoutUserInput.schema'
import { LawyerProfileUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './LawyerProfileUncheckedCreateNestedManyWithoutUserInput.schema'
import { CaseNoteUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './CaseNoteUncheckedCreateNestedManyWithoutAuthorInput.schema'
import { MessageUncheckedCreateNestedManyWithoutSenderInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutSenderInput.schema'
import { MessageUncheckedCreateNestedManyWithoutReceiverInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutReceiverInput.schema'
import { DocumentUncheckedCreateNestedManyWithoutUploaderInputObjectSchema } from './DocumentUncheckedCreateNestedManyWithoutUploaderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutCasesAsClientInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    pictureUrl: z.string().optional().nullable(),
    tokenInvitation: z.string().optional().nullable(),
    stripeCustomerId: z.string().optional().nullable(),
    status: z.lazy(() => UserStatusSchema).optional(),
    globalRole: z.string().optional(),
    password: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    organizationRoles: z
      .lazy(
        () =>
          OrganizationRoleUncheckedCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
    lawyerProfiles: z
      .lazy(
        () =>
          LawyerProfileUncheckedCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
    caseNotesAsAuthor: z
      .lazy(
        () => CaseNoteUncheckedCreateNestedManyWithoutAuthorInputObjectSchema,
      )
      .optional(),
    messagesAsSender: z
      .lazy(
        () => MessageUncheckedCreateNestedManyWithoutSenderInputObjectSchema,
      )
      .optional(),
    messagesAsReceiver: z
      .lazy(
        () => MessageUncheckedCreateNestedManyWithoutReceiverInputObjectSchema,
      )
      .optional(),
    documentsAsUploader: z
      .lazy(
        () => DocumentUncheckedCreateNestedManyWithoutUploaderInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const UserUncheckedCreateWithoutCasesAsClientInputObjectSchema = Schema
