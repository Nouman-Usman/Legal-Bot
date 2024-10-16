import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutLawyerProfilesInputObjectSchema } from './UserCreateWithoutLawyerProfilesInput.schema'
import { UserUncheckedCreateWithoutLawyerProfilesInputObjectSchema } from './UserUncheckedCreateWithoutLawyerProfilesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutLawyerProfilesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutLawyerProfilesInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutLawyerProfilesInputObjectSchema),
      ]),
    })
    .strict()

export const UserCreateOrConnectWithoutLawyerProfilesInputObjectSchema = Schema
