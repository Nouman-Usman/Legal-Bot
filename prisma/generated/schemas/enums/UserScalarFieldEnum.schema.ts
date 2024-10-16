import { z } from 'zod'

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'email',
  'pictureUrl',
  'tokenInvitation',
  'stripeCustomerId',
  'status',
  'globalRole',
  'password',
  'createdAt',
  'updatedAt',
])
