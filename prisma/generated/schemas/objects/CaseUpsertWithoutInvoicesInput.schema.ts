import { z } from 'zod'
import { CaseUpdateWithoutInvoicesInputObjectSchema } from './CaseUpdateWithoutInvoicesInput.schema'
import { CaseUncheckedUpdateWithoutInvoicesInputObjectSchema } from './CaseUncheckedUpdateWithoutInvoicesInput.schema'
import { CaseCreateWithoutInvoicesInputObjectSchema } from './CaseCreateWithoutInvoicesInput.schema'
import { CaseUncheckedCreateWithoutInvoicesInputObjectSchema } from './CaseUncheckedCreateWithoutInvoicesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUpsertWithoutInvoicesInput> = z
  .object({
    update: z.union([
      z.lazy(() => CaseUpdateWithoutInvoicesInputObjectSchema),
      z.lazy(() => CaseUncheckedUpdateWithoutInvoicesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CaseCreateWithoutInvoicesInputObjectSchema),
      z.lazy(() => CaseUncheckedCreateWithoutInvoicesInputObjectSchema),
    ]),
  })
  .strict()

export const CaseUpsertWithoutInvoicesInputObjectSchema = Schema
