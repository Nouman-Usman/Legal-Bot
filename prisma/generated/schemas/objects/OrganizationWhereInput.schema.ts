import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { OrganizationRoleListRelationFilterObjectSchema } from './OrganizationRoleListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => OrganizationWhereInputObjectSchema),
        z.lazy(() => OrganizationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => OrganizationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => OrganizationWhereInputObjectSchema),
        z.lazy(() => OrganizationWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    pictureUrl: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    stripeCustomerId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    roles: z
      .lazy(() => OrganizationRoleListRelationFilterObjectSchema)
      .optional(),
  })
  .strict()

export const OrganizationWhereInputObjectSchema = Schema
