import { z } from 'zod'
import { DocumentWhereUniqueInputObjectSchema } from './DocumentWhereUniqueInput.schema'
import { DocumentUpdateWithoutUploaderInputObjectSchema } from './DocumentUpdateWithoutUploaderInput.schema'
import { DocumentUncheckedUpdateWithoutUploaderInputObjectSchema } from './DocumentUncheckedUpdateWithoutUploaderInput.schema'
import { DocumentCreateWithoutUploaderInputObjectSchema } from './DocumentCreateWithoutUploaderInput.schema'
import { DocumentUncheckedCreateWithoutUploaderInputObjectSchema } from './DocumentUncheckedCreateWithoutUploaderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DocumentUpsertWithWhereUniqueWithoutUploaderInput> =
  z
    .object({
      where: z.lazy(() => DocumentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DocumentUpdateWithoutUploaderInputObjectSchema),
        z.lazy(() => DocumentUncheckedUpdateWithoutUploaderInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => DocumentCreateWithoutUploaderInputObjectSchema),
        z.lazy(() => DocumentUncheckedCreateWithoutUploaderInputObjectSchema),
      ]),
    })
    .strict()

export const DocumentUpsertWithWhereUniqueWithoutUploaderInputObjectSchema =
  Schema
