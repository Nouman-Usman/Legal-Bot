import { z } from 'zod'
import { DocumentWhereUniqueInputObjectSchema } from './DocumentWhereUniqueInput.schema'
import { DocumentCreateWithoutUploaderInputObjectSchema } from './DocumentCreateWithoutUploaderInput.schema'
import { DocumentUncheckedCreateWithoutUploaderInputObjectSchema } from './DocumentUncheckedCreateWithoutUploaderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutUploaderInput> = z
  .object({
    where: z.lazy(() => DocumentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DocumentCreateWithoutUploaderInputObjectSchema),
      z.lazy(() => DocumentUncheckedCreateWithoutUploaderInputObjectSchema),
    ]),
  })
  .strict()

export const DocumentCreateOrConnectWithoutUploaderInputObjectSchema = Schema
