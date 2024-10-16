import { z } from 'zod'
import { CaseCreateWithoutInvoicesInputObjectSchema } from './CaseCreateWithoutInvoicesInput.schema'
import { CaseUncheckedCreateWithoutInvoicesInputObjectSchema } from './CaseUncheckedCreateWithoutInvoicesInput.schema'
import { CaseCreateOrConnectWithoutInvoicesInputObjectSchema } from './CaseCreateOrConnectWithoutInvoicesInput.schema'
import { CaseUpsertWithoutInvoicesInputObjectSchema } from './CaseUpsertWithoutInvoicesInput.schema'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'
import { CaseUpdateWithoutInvoicesInputObjectSchema } from './CaseUpdateWithoutInvoicesInput.schema'
import { CaseUncheckedUpdateWithoutInvoicesInputObjectSchema } from './CaseUncheckedUpdateWithoutInvoicesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUpdateOneWithoutInvoicesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CaseCreateWithoutInvoicesInputObjectSchema),
        z.lazy(() => CaseUncheckedCreateWithoutInvoicesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CaseCreateOrConnectWithoutInvoicesInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => CaseUpsertWithoutInvoicesInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => CaseWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => CaseUpdateWithoutInvoicesInputObjectSchema),
        z.lazy(() => CaseUncheckedUpdateWithoutInvoicesInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const CaseUpdateOneWithoutInvoicesNestedInputObjectSchema = Schema
