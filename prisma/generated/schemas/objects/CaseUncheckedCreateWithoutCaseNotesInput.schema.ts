import { z } from 'zod'
import { InvoiceUncheckedCreateNestedManyWithoutCaseInputObjectSchema } from './InvoiceUncheckedCreateNestedManyWithoutCaseInput.schema'
import { MessageUncheckedCreateNestedManyWithoutCaseInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutCaseInput.schema'
import { DocumentUncheckedCreateNestedManyWithoutCaseInputObjectSchema } from './DocumentUncheckedCreateNestedManyWithoutCaseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUncheckedCreateWithoutCaseNotesInput> = z
  .object({
    id: z.string().optional(),
    caseNumber: z.string().optional().nullable(),
    title: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    status: z.string().optional().nullable(),
    startDate: z.string().optional().nullable(),
    endDate: z.string().optional().nullable(),
    lawyerProfileId: z.string(),
    clientId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    invoices: z
      .lazy(() => InvoiceUncheckedCreateNestedManyWithoutCaseInputObjectSchema)
      .optional(),
    messages: z
      .lazy(() => MessageUncheckedCreateNestedManyWithoutCaseInputObjectSchema)
      .optional(),
    documents: z
      .lazy(() => DocumentUncheckedCreateNestedManyWithoutCaseInputObjectSchema)
      .optional(),
  })
  .strict()

export const CaseUncheckedCreateWithoutCaseNotesInputObjectSchema = Schema
