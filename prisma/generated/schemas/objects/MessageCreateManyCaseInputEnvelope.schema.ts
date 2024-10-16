import { z } from 'zod'
import { MessageCreateManyCaseInputObjectSchema } from './MessageCreateManyCaseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MessageCreateManyCaseInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MessageCreateManyCaseInputObjectSchema),
      z.lazy(() => MessageCreateManyCaseInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const MessageCreateManyCaseInputEnvelopeObjectSchema = Schema
