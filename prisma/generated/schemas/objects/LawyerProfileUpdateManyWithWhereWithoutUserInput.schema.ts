import { z } from 'zod'
import { LawyerProfileScalarWhereInputObjectSchema } from './LawyerProfileScalarWhereInput.schema'
import { LawyerProfileUpdateManyMutationInputObjectSchema } from './LawyerProfileUpdateManyMutationInput.schema'
import { LawyerProfileUncheckedUpdateManyWithoutLawyerProfilesInputObjectSchema } from './LawyerProfileUncheckedUpdateManyWithoutLawyerProfilesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LawyerProfileUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => LawyerProfileScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => LawyerProfileUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            LawyerProfileUncheckedUpdateManyWithoutLawyerProfilesInputObjectSchema,
        ),
      ]),
    })
    .strict()

export const LawyerProfileUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema
