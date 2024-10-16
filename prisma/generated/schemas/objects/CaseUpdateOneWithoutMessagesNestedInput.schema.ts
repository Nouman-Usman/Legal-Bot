import { z } from 'zod'
import { CaseCreateWithoutMessagesInputObjectSchema } from './CaseCreateWithoutMessagesInput.schema'
import { CaseUncheckedCreateWithoutMessagesInputObjectSchema } from './CaseUncheckedCreateWithoutMessagesInput.schema'
import { CaseCreateOrConnectWithoutMessagesInputObjectSchema } from './CaseCreateOrConnectWithoutMessagesInput.schema'
import { CaseUpsertWithoutMessagesInputObjectSchema } from './CaseUpsertWithoutMessagesInput.schema'
import { CaseWhereUniqueInputObjectSchema } from './CaseWhereUniqueInput.schema'
import { CaseUpdateWithoutMessagesInputObjectSchema } from './CaseUpdateWithoutMessagesInput.schema'
import { CaseUncheckedUpdateWithoutMessagesInputObjectSchema } from './CaseUncheckedUpdateWithoutMessagesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseUpdateOneWithoutMessagesNestedInput> = z
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
    upsert: z.lazy(() => CaseUpsertWithoutMessagesInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => CaseWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => CaseUpdateWithoutMessagesInputObjectSchema),
        z.lazy(() => CaseUncheckedUpdateWithoutMessagesInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const CaseUpdateOneWithoutMessagesNestedInputObjectSchema = Schema
