import { z } from 'zod'

export const CaseScalarFieldEnumSchema = z.enum([
  'id',
  'caseNumber',
  'title',
  'description',
  'status',
  'startDate',
  'endDate',
  'lawyerProfileId',
  'clientId',
  'createdAt',
  'updatedAt',
])
