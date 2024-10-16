import { z } from 'zod'
import { DocumentWhereUniqueInputObjectSchema } from './DocumentWhereUniqueInput.schema'
import { DocumentUpdateWithoutUploaderInputObjectSchema } from './DocumentUpdateWithoutUploaderInput.schema'
import { DocumentUncheckedUpdateWithoutUploaderInputObjectSchema } from './DocumentUncheckedUpdateWithoutUploaderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DocumentUpdateWithWhereUniqueWithoutUploaderInput> =
  z
    .object({
      where: z.lazy(() => DocumentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DocumentUpdateWithoutUploaderInputObjectSchema),
        z.lazy(() => DocumentUncheckedUpdateWithoutUploaderInputObjectSchema),
      ]),
    })
    .strict()

export const DocumentUpdateWithWhereUniqueWithoutUploaderInputObjectSchema =
  Schema
