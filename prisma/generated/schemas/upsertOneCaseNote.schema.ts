import { z } from 'zod'
import { CaseNoteWhereUniqueInputObjectSchema } from './objects/CaseNoteWhereUniqueInput.schema'
import { CaseNoteCreateInputObjectSchema } from './objects/CaseNoteCreateInput.schema'
import { CaseNoteUncheckedCreateInputObjectSchema } from './objects/CaseNoteUncheckedCreateInput.schema'
import { CaseNoteUpdateInputObjectSchema } from './objects/CaseNoteUpdateInput.schema'
import { CaseNoteUncheckedUpdateInputObjectSchema } from './objects/CaseNoteUncheckedUpdateInput.schema'

export const CaseNoteUpsertSchema = z.object({
  where: CaseNoteWhereUniqueInputObjectSchema,
  create: z.union([
    CaseNoteCreateInputObjectSchema,
    CaseNoteUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    CaseNoteUpdateInputObjectSchema,
    CaseNoteUncheckedUpdateInputObjectSchema,
  ]),
})
