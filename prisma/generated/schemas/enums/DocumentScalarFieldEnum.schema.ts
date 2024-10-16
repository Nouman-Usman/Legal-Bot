import { z } from 'zod'

export const DocumentScalarFieldEnumSchema = z.enum([
  'id',
  'documentUrl',
  'description',
  'uploadDate',
  'caseId',
  'uploaderId',
  'createdAt',
  'updatedAt',
])
