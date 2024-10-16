import { z } from 'zod'

export const MessageScalarFieldEnumSchema = z.enum([
  'id',
  'content',
  'timestamp',
  'senderId',
  'receiverId',
  'caseId',
  'createdAt',
  'updatedAt',
])
