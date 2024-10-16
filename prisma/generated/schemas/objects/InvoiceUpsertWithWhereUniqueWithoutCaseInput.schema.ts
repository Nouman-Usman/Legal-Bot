import { z } from 'zod'
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema'
import { InvoiceUpdateWithoutCaseInputObjectSchema } from './InvoiceUpdateWithoutCaseInput.schema'
import { InvoiceUncheckedUpdateWithoutCaseInputObjectSchema } from './InvoiceUncheckedUpdateWithoutCaseInput.schema'
import { InvoiceCreateWithoutCaseInputObjectSchema } from './InvoiceCreateWithoutCaseInput.schema'
import { InvoiceUncheckedCreateWithoutCaseInputObjectSchema } from './InvoiceUncheckedCreateWithoutCaseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.InvoiceUpsertWithWhereUniqueWithoutCaseInput> = z
  .object({
    where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => InvoiceUpdateWithoutCaseInputObjectSchema),
      z.lazy(() => InvoiceUncheckedUpdateWithoutCaseInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => InvoiceCreateWithoutCaseInputObjectSchema),
      z.lazy(() => InvoiceUncheckedCreateWithoutCaseInputObjectSchema),
    ]),
  })
  .strict()

export const InvoiceUpsertWithWhereUniqueWithoutCaseInputObjectSchema = Schema
