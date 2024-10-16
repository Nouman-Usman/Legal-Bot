import { z } from 'zod'

export const OrganizationRoleScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'createdAt',
  'updatedAt',
  'userId',
  'organizationId',
])
