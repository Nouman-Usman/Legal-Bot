import { z } from 'zod'

export const OrganizationScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'pictureUrl',
  'stripeCustomerId',
  'createdAt',
  'updatedAt',
])
