import { z } from 'zod'
import { DocumentScalarWhereInputObjectSchema } from './DocumentScalarWhereInput.schema'
import { DocumentUpdateManyMutationInputObjectSchema } from './DocumentUpdateManyMutationInput.schema'
import { DocumentUncheckedUpdateManyWithoutDocumentsAsUploaderInputObjectSchema } from './DocumentUncheckedUpdateManyWithoutDocumentsAsUploaderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DocumentUpdateManyWithWhereWithoutUploaderInput> =
  z
    .object({
      where: z.lazy(() => DocumentScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => DocumentUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            DocumentUncheckedUpdateManyWithoutDocumentsAsUploaderInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const DocumentUpdateManyWithWhereWithoutUploaderInputObjectSchema =
  Schema
