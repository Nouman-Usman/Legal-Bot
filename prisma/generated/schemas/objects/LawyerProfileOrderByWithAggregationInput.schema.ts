import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { LawyerProfileCountOrderByAggregateInputObjectSchema } from './LawyerProfileCountOrderByAggregateInput.schema'
import { LawyerProfileAvgOrderByAggregateInputObjectSchema } from './LawyerProfileAvgOrderByAggregateInput.schema'
import { LawyerProfileMaxOrderByAggregateInputObjectSchema } from './LawyerProfileMaxOrderByAggregateInput.schema'
import { LawyerProfileMinOrderByAggregateInputObjectSchema } from './LawyerProfileMinOrderByAggregateInput.schema'
import { LawyerProfileSumOrderByAggregateInputObjectSchema } from './LawyerProfileSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    licenseNumber: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    barAssociation: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    yearsOfExperience: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    specialties: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    profilePictureUrl: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => LawyerProfileCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => LawyerProfileAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => LawyerProfileMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => LawyerProfileMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => LawyerProfileSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const LawyerProfileOrderByWithAggregationInputObjectSchema = Schema
