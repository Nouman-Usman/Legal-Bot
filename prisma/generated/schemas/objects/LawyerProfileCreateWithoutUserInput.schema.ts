import { z } from 'zod'
import { CaseCreateNestedManyWithoutLawyerProfileInputObjectSchema } from './CaseCreateNestedManyWithoutLawyerProfileInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    licenseNumber: z.string().optional().nullable(),
    barAssociation: z.string().optional().nullable(),
    yearsOfExperience: z.number().optional().nullable(),
    specialties: z.string().optional().nullable(),
    profilePictureUrl: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    cases: z
      .lazy(() => CaseCreateNestedManyWithoutLawyerProfileInputObjectSchema)
      .optional(),
  })
  .strict()

export const LawyerProfileCreateWithoutUserInputObjectSchema = Schema
