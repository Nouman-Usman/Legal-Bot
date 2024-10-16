import { z } from 'zod'
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema'
import { InvoiceCreateWithoutCaseInputObjectSchema } from './InvoiceCreateWithoutCaseInput.schema'
import { InvoiceUncheckedCreateWithoutCaseInputObjectSchema } from './InvoiceUncheckedCreateWithoutCaseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutCaseInput> = z
  .object({
    where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => InvoiceCreateWithoutCaseInputObjectSchema),
      z.lazy(() => InvoiceUncheckedCreateWithoutCaseInputObjectSchema),
    ]),
  })
  .strict()

export const InvoiceCreateOrConnectWithoutCaseInputObjectSchema = Schema
