import { z } from 'zod'
import { MessageCreateManySenderInputObjectSchema } from './MessageCreateManySenderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageCreateManySenderInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MessageCreateManySenderInputObjectSchema),
      z.lazy(() => MessageCreateManySenderInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const MessageCreateManySenderInputEnvelopeObjectSchema = Schema
