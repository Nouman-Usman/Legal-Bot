import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { CaseUpdateOneWithoutCaseNotesNestedInputObjectSchema } from './CaseUpdateOneWithoutCaseNotesNestedInput.schema'
import { UserUpdateOneWithoutCaseNotesAsAuthorNestedInputObjectSchema } from './UserUpdateOneWithoutCaseNotesAsAuthorNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    noteContent: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    createdDate: z
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
    case: z
      .lazy(() => CaseUpdateOneWithoutCaseNotesNestedInputObjectSchema)
      .optional(),
    author: z
      .lazy(() => UserUpdateOneWithoutCaseNotesAsAuthorNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const CaseNoteUpdateInputObjectSchema = Schema
