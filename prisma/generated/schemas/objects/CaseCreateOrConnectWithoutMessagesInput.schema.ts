import { z } from 'zod'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'
import { CaseCreateWithoutMessagesInputObjectSchema } from './CaseCreateWithoutMessagesInput.schema'
import { CaseUncheckedCreateWithoutMessagesInputObjectSchema } from './CaseUncheckedCreateWithoutMessagesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseCreateOrConnectWithoutMessagesInput> = z
  .object({
    where: z.lazy(() => CaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CaseCreateWithoutMessagesInputObjectSchema),
      z.lazy(() => CaseUncheckedCreateWithoutMessagesInputObjectSchema),
    ]),
  })
  .strict()

export const CaseCreateOrConnectWithoutMessagesInputObjectSchema = Schema
