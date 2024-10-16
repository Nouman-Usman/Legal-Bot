import { z } from 'zod'
import { OrganizationRoleCreateManyUserInputObjectSchema } from './OrganizationRoleCreateManyUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrganizationRoleCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => OrganizationRoleCreateManyUserInputObjectSchema),
      z.lazy(() => OrganizationRoleCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const OrganizationRoleCreateManyUserInputEnvelopeObjectSchema = Schema
