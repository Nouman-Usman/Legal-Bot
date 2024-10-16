import { z } from 'zod'
import { UserCreateNestedOneWithoutCasesAsClientInputObjectSchema } from './UserCreateNestedOneWithoutCasesAsClientInput.schema'
import { InvoiceCreateNestedManyWithoutCaseInputObjectSchema } from './InvoiceCreateNestedManyWithoutCaseInput.schema'
import { CaseNoteCreateNestedManyWithoutCaseInputObjectSchema } from './CaseNoteCreateNestedManyWithoutCaseInput.schema'
import { MessageCreateNestedManyWithoutCaseInputObjectSchema } from './MessageCreateNestedManyWithoutCaseInput.schema'
import { DocumentCreateNestedManyWithoutCaseInputObjectSchema } from './DocumentCreateNestedManyWithoutCaseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseCreateWithoutLawyerProfileInput> = z
  .object({
    id: z.string().optional(),
    caseNumber: z.string().optional().nullable(),
    title: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    status: z.string().optional().nullable(),
    startDate: z.string().optional().nullable(),
    endDate: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    client: z
      .lazy(() => UserCreateNestedOneWithoutCasesAsClientInputObjectSchema)
      .optional(),
    invoices: z
      .lazy(() => InvoiceCreateNestedManyWithoutCaseInputObjectSchema)
      .optional(),
    caseNotes: z
      .lazy(() => CaseNoteCreateNestedManyWithoutCaseInputObjectSchema)
      .optional(),
    messages: z
      .lazy(() => MessageCreateNestedManyWithoutCaseInputObjectSchema)
      .optional(),
    documents: z
      .lazy(() => DocumentCreateNestedManyWithoutCaseInputObjectSchema)
      .optional(),
  })
  .strict()

export const CaseCreateWithoutLawyerProfileInputObjectSchema = Schema
