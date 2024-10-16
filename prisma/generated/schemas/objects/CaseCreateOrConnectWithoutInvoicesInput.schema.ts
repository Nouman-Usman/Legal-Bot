import { z } from 'zod'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'
import { CaseCreateWithoutInvoicesInputObjectSchema } from './CaseCreateWithoutInvoicesInput.schema'
import { CaseUncheckedCreateWithoutInvoicesInputObjectSchema } from './CaseUncheckedCreateWithoutInvoicesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseCreateOrConnectWithoutInvoicesInput> = z
  .object({
    where: z.lazy(() => CaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CaseCreateWithoutInvoicesInputObjectSchema),
      z.lazy(() => CaseUncheckedCreateWithoutInvoicesInputObjectSchema),
    ]),
  })
  .strict()

export const CaseCreateOrConnectWithoutInvoicesInputObjectSchema = Schema
