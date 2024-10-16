import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileUncheckedCreateWithoutCasesInput> =
  z
    .object({
      id: z.string().optional(),
      licenseNumber: z.string().optional().nullable(),
      barAssociation: z.string().optional().nullable(),
      yearsOfExperience: z.number().optional().nullable(),
      specialties: z.string().optional().nullable(),
      profilePictureUrl: z.string().optional().nullable(),
      userId: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict()

export const LawyerProfileUncheckedCreateWithoutCasesInputObjectSchema = Schema
