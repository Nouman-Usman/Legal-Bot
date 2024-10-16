import { z } from 'zod'
import { InvoiceCreateWithoutCaseInputObjectSchema } from './InvoiceCreateWithoutCaseInput.schema'
import { InvoiceUncheckedCreateWithoutCaseInputObjectSchema } from './InvoiceUncheckedCreateWithoutCaseInput.schema'
import { InvoiceCreateOrConnectWithoutCaseInputObjectSchema } from './InvoiceCreateOrConnectWithoutCaseInput.schema'
import { InvoiceUpsertWithWhereUniqueWithoutCaseInputObjectSchema } from './InvoiceUpsertWithWhereUniqueWithoutCaseInput.schema'
import { InvoiceCreateManyCaseInputEnvelopeObjectSchema } from './InvoiceCreateManyCaseInputEnvelope.schema'
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema'
import { InvoiceUpdateWithWhereUniqueWithoutCaseInputObjectSchema } from './InvoiceUpdateWithWhereUniqueWithoutCaseInput.schema'
import { InvoiceUpdateManyWithWhereWithoutCaseInputObjectSchema } from './InvoiceUpdateManyWithWhereWithoutCaseInput.schema'
import { InvoiceScalarWhereInputObjectSchema } from './InvoiceScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.InvoiceUpdateManyWithoutCaseNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => InvoiceUpsertWithWhereUniqueWithoutCaseInputObjectSchema),
        z
          .lazy(() => InvoiceUpsertWithWhereUniqueWithoutCaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => InvoiceCreateManyCaseInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
        z.lazy(() => InvoiceWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => InvoiceUpdateWithWhereUniqueWithoutCaseInputObjectSchema),
        z
          .lazy(() => InvoiceUpdateWithWhereUniqueWithoutCaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => InvoiceUpdateManyWithWhereWithoutCaseInputObjectSchema),
        z
          .lazy(() => InvoiceUpdateManyWithWhereWithoutCaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => InvoiceScalarWhereInputObjectSchema),
        z.lazy(() => InvoiceScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const InvoiceUpdateManyWithoutCaseNestedInputObjectSchema = Schema
