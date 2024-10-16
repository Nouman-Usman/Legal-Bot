import { z } from 'zod'
import { DocumentScalarWhereInputObjectSchema } from './DocumentScalarWhereInput.schema'
import { DocumentUpdateManyMutationInputObjectSchema } from './DocumentUpdateManyMutationInput.schema'
import { DocumentUncheckedUpdateManyWithoutDocumentsInputObjectSchema } from './DocumentUncheckedUpdateManyWithoutDocumentsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DocumentUpdateManyWithWhereWithoutCaseInput> = z
  .object({
    where: z.lazy(() => DocumentScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => DocumentUpdateManyMutationInputObjectSchema),
      z.lazy(
        () => DocumentUncheckedUpdateManyWithoutDocumentsInputObjectSchema,
      ),
    ]),
  })
  .strict()

export const DocumentUpdateManyWithWhereWithoutCaseInputObjectSchema = Schema
