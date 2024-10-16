import { z } from 'zod'
import { MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'
import { MessageCreateWithoutCaseInputObjectSchema } from './MessageCreateWithoutCaseInput.schema'
import { MessageUncheckedCreateWithoutCaseInputObjectSchema } from './MessageUncheckedCreateWithoutCaseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageCreateOrConnectWithoutCaseInput> = z
  .object({
    where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MessageCreateWithoutCaseInputObjectSchema),
      z.lazy(() => MessageUncheckedCreateWithoutCaseInputObjectSchema),
    ]),
  })
  .strict()

export const MessageCreateOrConnectWithoutCaseInputObjectSchema = Schema
