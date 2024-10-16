import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { UserUpdateOneRequiredWithoutOrganizationRolesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutOrganizationRolesNestedInput.schema'
import { OrganizationUpdateOneRequiredWithoutRolesNestedInputObjectSchema } from './OrganizationUpdateOneRequiredWithoutRolesNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleUpdateInput> = z
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
    user: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutOrganizationRolesNestedInputObjectSchema,
      )
      .optional(),
    organization: z
      .lazy(
        () => OrganizationUpdateOneRequiredWithoutRolesNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const OrganizationRoleUpdateInputObjectSchema = Schema
