import { z } from 'zod'
import { DocumentWhereUniqueInputObjectSchema } from './objects/DocumentWhereUniqueInput.schema'

export const DocumentDeleteOneSchema = z.object({
  where: DocumentWhereUniqueInputObjectSchema,
})
