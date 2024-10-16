import { z } from 'zod'
import { UserCreateWithoutLawyerProfilesInputObjectSchema } from './UserCreateWithoutLawyerProfilesInput.schema'
import { UserUncheckedCreateWithoutLawyerProfilesInputObjectSchema } from './UserUncheckedCreateWithoutLawyerProfilesInput.schema'
import { UserCreateOrConnectWithoutLawyerProfilesInputObjectSchema } from './UserCreateOrConnectWithoutLawyerProfilesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutLawyerProfilesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutLawyerProfilesInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutLawyerProfilesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutLawyerProfilesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const UserCreateNestedOneWithoutLawyerProfilesInputObjectSchema = Schema
