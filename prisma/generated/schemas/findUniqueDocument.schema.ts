import { z } from 'zod'
import { DocumentWhereUniqueInputObjectSchema } from './objects/DocumentWhereUniqueInput.schema'

export const DocumentFindUniqueSchema = z.object({
  where: DocumentWhereUniqueInputObjectSchema,
})
