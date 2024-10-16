import { z } from 'zod'
import { UserUpdateWithoutLawyerProfilesInputObjectSchema } from './UserUpdateWithoutLawyerProfilesInput.schema'
import { UserUncheckedUpdateWithoutLawyerProfilesInputObjectSchema } from './UserUncheckedUpdateWithoutLawyerProfilesInput.schema'
import { UserCreateWithoutLawyerProfilesInputObjectSchema } from './UserCreateWithoutLawyerProfilesInput.schema'
import { UserUncheckedCreateWithoutLawyerProfilesInputObjectSchema } from './UserUncheckedCreateWithoutLawyerProfilesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutLawyerProfilesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutLawyerProfilesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutLawyerProfilesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutLawyerProfilesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutLawyerProfilesInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutLawyerProfilesInputObjectSchema = Schema
