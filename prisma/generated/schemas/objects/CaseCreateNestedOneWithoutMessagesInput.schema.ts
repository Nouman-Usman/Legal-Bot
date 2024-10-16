import { z } from 'zod'
import { CaseCreateWithoutMessagesInputObjectSchema } from './CaseCreateWithoutMessagesInput.schema'
import { CaseUncheckedCreateWithoutMessagesInputObjectSchema } from './CaseUncheckedCreateWithoutMessagesInput.schema'
import { CaseCreateOrConnectWithoutMessagesInputObjectSchema } from './CaseCreateOrConnectWithoutMessagesInput.schema'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseCreateNestedOneWithoutMessagesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CaseCreateWithoutMessagesInputObjectSchema),
        z.lazy(() => CaseUncheckedCreateWithoutMessagesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CaseCreateOrConnectWithoutMessagesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => CaseWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const CaseCreateNestedOneWithoutMessagesInputObjectSchema = Schema
