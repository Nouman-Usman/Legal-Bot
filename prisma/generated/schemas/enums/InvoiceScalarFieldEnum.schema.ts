import { z } from 'zod'

export const InvoiceScalarFieldEnumSchema = z.enum([
  'id',
  'amount',
  'issueDate',
  'dueDate',
  'status',
  'details',
  'caseId',
  'createdAt',
  'updatedAt',
])
