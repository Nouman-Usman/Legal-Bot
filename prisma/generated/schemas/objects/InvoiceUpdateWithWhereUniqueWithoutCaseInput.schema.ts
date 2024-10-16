import { z } from 'zod'
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema'
import { InvoiceUpdateWithoutCaseInputObjectSchema } from './InvoiceUpdateWithoutCaseInput.schema'
import { InvoiceUncheckedUpdateWithoutCaseInputObjectSchema } from './InvoiceUncheckedUpdateWithoutCaseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.InvoiceUpdateWithWhereUniqueWithoutCaseInput> = z
  .object({
    where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => InvoiceUpdateWithoutCaseInputObjectSchema),
      z.lazy(() => InvoiceUncheckedUpdateWithoutCaseInputObjectSchema),
    ]),
  })
  .strict()

export const InvoiceUpdateWithWhereUniqueWithoutCaseInputObjectSchema = Schema
