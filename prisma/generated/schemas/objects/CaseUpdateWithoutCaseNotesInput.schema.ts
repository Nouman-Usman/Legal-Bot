import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { LawyerProfileUpdateOneWithoutCasesNestedInputObjectSchema } from './LawyerProfileUpdateOneWithoutCasesNestedInput.schema'
import { UserUpdateOneWithoutCasesAsClientNestedInputObjectSchema } from './UserUpdateOneWithoutCasesAsClientNestedInput.schema'
import { InvoiceUpdateManyWithoutCaseNestedInputObjectSchema } from './InvoiceUpdateManyWithoutCaseNestedInput.schema'
import { MessageUpdateManyWithoutCaseNestedInputObjectSchema } from './MessageUpdateManyWithoutCaseNestedInput.schema'
import { DocumentUpdateManyWithoutCaseNestedInputObjectSchema } from './DocumentUpdateManyWithoutCaseNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUpdateWithoutCaseNotesInput> = z
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
    lawyerProfile: z
      .lazy(() => LawyerProfileUpdateOneWithoutCasesNestedInputObjectSchema)
      .optional(),
    client: z
      .lazy(() => UserUpdateOneWithoutCasesAsClientNestedInputObjectSchema)
      .optional(),
    invoices: z
      .lazy(() => InvoiceUpdateManyWithoutCaseNestedInputObjectSchema)
      .optional(),
    messages: z
      .lazy(() => MessageUpdateManyWithoutCaseNestedInputObjectSchema)
      .optional(),
    documents: z
      .lazy(() => DocumentUpdateManyWithoutCaseNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const CaseUpdateWithoutCaseNotesInputObjectSchema = Schema
