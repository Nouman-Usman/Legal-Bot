import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'
import { OrganizationRelationFilterObjectSchema } from './OrganizationRelationFilter.schema'
import { OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => OrganizationRoleWhereInputObjectSchema),
        z.lazy(() => OrganizationRoleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => OrganizationRoleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => OrganizationRoleWhereInputObjectSchema),
        z.lazy(() => OrganizationRoleWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    organizationId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    organization: z
      .union([
        z.lazy(() => OrganizationRelationFilterObjectSchema),
        z.lazy(() => OrganizationWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const OrganizationRoleWhereInputObjectSchema = Schema
