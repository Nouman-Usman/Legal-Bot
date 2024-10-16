import { z } from 'zod'
import { InvoiceCreateWithoutCaseInputObjectSchema } from './InvoiceCreateWithoutCaseInput.schema'
import { InvoiceUncheckedCreateWithoutCaseInputObjectSchema } from './InvoiceUncheckedCreateWithoutCaseInput.schema'
import { InvoiceCreateOrConnectWithoutCaseInputObjectSchema } from './InvoiceCreateOrConnectWithoutCaseInput.schema'
import { InvoiceCreateManyCaseInputEnvelopeObjectSchema } from './InvoiceCreateManyCaseInputEnvelope.schema'
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.InvoiceUncheckedCreateNestedManyWithoutCaseInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InvoiceCreateWithoutCaseInputObjectSchema),
          z.lazy(() => InvoiceCreateWithoutCaseInputObjectSchema).array(),
          z.lazy(() => InvoiceUncheckedCreateWithoutCaseInputObjectSchema),
          z
            .lazy(() => InvoiceUncheckedCreateWithoutCaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => InvoiceCreateOrConnectWithoutCaseInputObjectSchema),
          z
            .lazy(() => InvoiceCreateOrConnectWithoutCaseInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => InvoiceCreateManyCaseInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
          z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const InvoiceUncheckedCreateNestedManyWithoutCaseInputObjectSchema =
  Schema
