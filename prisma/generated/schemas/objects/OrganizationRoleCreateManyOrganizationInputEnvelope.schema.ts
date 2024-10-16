import { z } from 'zod'
import { OrganizationRoleCreateManyOrganizationInputObjectSchema } from './OrganizationRoleCreateManyOrganizationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleCreateManyOrganizationInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => OrganizationRoleCreateManyOrganizationInputObjectSchema),
        z
          .lazy(() => OrganizationRoleCreateManyOrganizationInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const OrganizationRoleCreateManyOrganizationInputEnvelopeObjectSchema =
  Schema
