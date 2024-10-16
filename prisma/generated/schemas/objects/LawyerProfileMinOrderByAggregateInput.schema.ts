import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    licenseNumber: z.lazy(() => SortOrderSchema).optional(),
    barAssociation: z.lazy(() => SortOrderSchema).optional(),
    yearsOfExperience: z.lazy(() => SortOrderSchema).optional(),
    specialties: z.lazy(() => SortOrderSchema).optional(),
    profilePictureUrl: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const LawyerProfileMinOrderByAggregateInputObjectSchema = Schema
