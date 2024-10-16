import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { InvoiceUncheckedUpdateManyWithoutCaseNestedInputObjectSchema } from './InvoiceUncheckedUpdateManyWithoutCaseNestedInput.schema'
import { CaseNoteUncheckedUpdateManyWithoutCaseNestedInputObjectSchema } from './CaseNoteUncheckedUpdateManyWithoutCaseNestedInput.schema'
import { MessageUncheckedUpdateManyWithoutCaseNestedInputObjectSchema } from './MessageUncheckedUpdateManyWithoutCaseNestedInput.schema'
import { DocumentUncheckedUpdateManyWithoutCaseNestedInputObjectSchema } from './DocumentUncheckedUpdateManyWithoutCaseNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUncheckedUpdateWithoutClientInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    caseNumber: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    title: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    status: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    startDate: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    endDate: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    lawyerProfileId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    invoices: z
      .lazy(() => InvoiceUncheckedUpdateManyWithoutCaseNestedInputObjectSchema)
      .optional(),
    caseNotes: z
      .lazy(() => CaseNoteUncheckedUpdateManyWithoutCaseNestedInputObjectSchema)
      .optional(),
    messages: z
      .lazy(() => MessageUncheckedUpdateManyWithoutCaseNestedInputObjectSchema)
      .optional(),
    documents: z
      .lazy(() => DocumentUncheckedUpdateManyWithoutCaseNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const CaseUncheckedUpdateWithoutClientInputObjectSchema = Schema
