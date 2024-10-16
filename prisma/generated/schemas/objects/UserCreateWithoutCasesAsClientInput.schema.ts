import { z } from 'zod'
import { UserStatusSchema } from '../enums/UserStatus.schema'
import { OrganizationRoleCreateNestedManyWithoutUserInputObjectSchema } from './OrganizationRoleCreateNestedManyWithoutUserInput.schema'
import { LawyerProfileCreateNestedManyWithoutUserInputObjectSchema } from './LawyerProfileCreateNestedManyWithoutUserInput.schema'
import { CaseNoteCreateNestedManyWithoutAuthorInputObjectSchema } from './CaseNoteCreateNestedManyWithoutAuthorInput.schema'
import { MessageCreateNestedManyWithoutSenderInputObjectSchema } from './MessageCreateNestedManyWithoutSenderInput.schema'
import { MessageCreateNestedManyWithoutReceiverInputObjectSchema } from './MessageCreateNestedManyWithoutReceiverInput.schema'
import { DocumentCreateNestedManyWithoutUploaderInputObjectSchema } from './DocumentCreateNestedManyWithoutUploaderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateWithoutCasesAsClientInput> = z
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
      .lazy(() => OrganizationRoleCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    lawyerProfiles: z
      .lazy(() => LawyerProfileCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    caseNotesAsAuthor: z
      .lazy(() => CaseNoteCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
    messagesAsSender: z
      .lazy(() => MessageCreateNestedManyWithoutSenderInputObjectSchema)
      .optional(),
    messagesAsReceiver: z
      .lazy(() => MessageCreateNestedManyWithoutReceiverInputObjectSchema)
      .optional(),
    documentsAsUploader: z
      .lazy(() => DocumentCreateNestedManyWithoutUploaderInputObjectSchema)
      .optional(),
  })
  .strict()

export const UserCreateWithoutCasesAsClientInputObjectSchema = Schema
