import { z } from 'zod'

export const LawyerProfileScalarFieldEnumSchema = z.enum([
  'id',
  'licenseNumber',
  'barAssociation',
  'yearsOfExperience',
  'specialties',
  'profilePictureUrl',
  'userId',
  'createdAt',
  'updatedAt',
])
