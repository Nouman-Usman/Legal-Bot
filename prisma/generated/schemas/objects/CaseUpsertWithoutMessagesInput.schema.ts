import { z } from 'zod'
import { CaseUpdateWithoutMessagesInputObjectSchema } from './CaseUpdateWithoutMessagesInput.schema'
import { CaseUncheckedUpdateWithoutMessagesInputObjectSchema } from './CaseUncheckedUpdateWithoutMessagesInput.schema'
import { CaseCreateWithoutMessagesInputObjectSchema } from './CaseCreateWithoutMessagesInput.schema'
import { CaseUncheckedCreateWithoutMessagesInputObjectSchema } from './CaseUncheckedCreateWithoutMessagesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUpsertWithoutMessagesInput> = z
  .object({
    update: z.union([
      z.lazy(() => CaseUpdateWithoutMessagesInputObjectSchema),
      z.lazy(() => CaseUncheckedUpdateWithoutMessagesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CaseCreateWithoutMessagesInputObjectSchema),
      z.lazy(() => CaseUncheckedCreateWithoutMessagesInputObjectSchema),
    ]),
  })
  .strict()

export const CaseUpsertWithoutMessagesInputObjectSchema = Schema
