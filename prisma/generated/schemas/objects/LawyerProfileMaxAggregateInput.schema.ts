import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    licenseNumber: z.literal(true).optional(),
    barAssociation: z.literal(true).optional(),
    yearsOfExperience: z.literal(true).optional(),
    specialties: z.literal(true).optional(),
    profilePictureUrl: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict()

export const LawyerProfileMaxAggregateInputObjectSchema = Schema
