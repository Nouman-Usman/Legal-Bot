import { z } from 'zod'
import { CaseNoteCreateWithoutAuthorInputObjectSchema } from './CaseNoteCreateWithoutAuthorInput.schema'
import { CaseNoteUncheckedCreateWithoutAuthorInputObjectSchema } from './CaseNoteUncheckedCreateWithoutAuthorInput.schema'
import { CaseNoteCreateOrConnectWithoutAuthorInputObjectSchema } from './CaseNoteCreateOrConnectWithoutAuthorInput.schema'
import { CaseNoteCreateManyAuthorInputEnvelopeObjectSchema } from './CaseNoteCreateManyAuthorInputEnvelope.schema'
import { CaseNoteWhereUniqueInputObjectSchema } from './CaseNoteWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CaseNoteCreateNestedManyWithoutAuthorInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CaseNoteCreateWithoutAuthorInputObjectSchema),
        z.lazy(() => CaseNoteCreateWithoutAuthorInputObjectSchema).array(),
        z.lazy(() => CaseNoteUncheckedCreateWithoutAuthorInputObjectSchema),
        z
          .lazy(() => CaseNoteUncheckedCreateWithoutAuthorInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => CaseNoteCreateOrConnectWithoutAuthorInputObjectSchema),
        z
          .lazy(() => CaseNoteCreateOrConnectWithoutAuthorInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => CaseNoteCreateManyAuthorInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => CaseNoteWhereUniqueInputObjectSchema),
        z.lazy(() => CaseNoteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const CaseNoteCreateNestedManyWithoutAuthorInputObjectSchema = Schema
