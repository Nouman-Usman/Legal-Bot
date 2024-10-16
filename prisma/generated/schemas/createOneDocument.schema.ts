import { z } from 'zod'
import { DocumentCreateInputObjectSchema } from './objects/DocumentCreateInput.schema'
import { DocumentUncheckedCreateInputObjectSchema } from './objects/DocumentUncheckedCreateInput.schema'

export const DocumentCreateOneSchema = z.object({
  data: z.union([
    DocumentCreateInputObjectSchema,
    DocumentUncheckedCreateInputObjectSchema,
  ]),
})
