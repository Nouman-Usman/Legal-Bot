import { z } from 'zod'

export const CaseNoteScalarFieldEnumSchema = z.enum([
  'id',
  'noteContent',
  'createdDate',
  'caseId',
  'authorId',
  'createdAt',
  'updatedAt',
])
