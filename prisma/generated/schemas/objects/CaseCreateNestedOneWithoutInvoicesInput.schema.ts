import { z } from 'zod'
import { CaseCreateWithoutInvoicesInputObjectSchema } from './CaseCreateWithoutInvoicesInput.schema'
import { CaseUncheckedCreateWithoutInvoicesInputObjectSchema } from './CaseUncheckedCreateWithoutInvoicesInput.schema'
import { CaseCreateOrConnectWithoutInvoicesInputObjectSchema } from './CaseCreateOrConnectWithoutInvoicesInput.schema'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseCreateNestedOneWithoutInvoicesInput> = z
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
    connect: z.lazy(() => CaseWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const CaseCreateNestedOneWithoutInvoicesInputObjectSchema = Schema
