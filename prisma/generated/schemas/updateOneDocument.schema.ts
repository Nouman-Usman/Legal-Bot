import { z } from 'zod'
import { DocumentUpdateInputObjectSchema } from './objects/DocumentUpdateInput.schema'
import { DocumentUncheckedUpdateInputObjectSchema } from './objects/DocumentUncheckedUpdateInput.schema'
import { DocumentWhereUniqueInputObjectSchema } from './objects/DocumentWhereUniqueInput.schema'

export const DocumentUpdateOneSchema = z.object({
  data: z.union([
    DocumentUpdateInputObjectSchema,
    DocumentUncheckedUpdateInputObjectSchema,
  ]),
  where: DocumentWhereUniqueInputObjectSchema,
})
