import { z } from 'zod'
import { UserCreateWithoutLawyerProfilesInputObjectSchema } from './UserCreateWithoutLawyerProfilesInput.schema'
import { UserUncheckedCreateWithoutLawyerProfilesInputObjectSchema } from './UserUncheckedCreateWithoutLawyerProfilesInput.schema'
import { UserCreateOrConnectWithoutLawyerProfilesInputObjectSchema } from './UserCreateOrConnectWithoutLawyerProfilesInput.schema'
import { UserUpsertWithoutLawyerProfilesInputObjectSchema } from './UserUpsertWithoutLawyerProfilesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutLawyerProfilesInputObjectSchema } from './UserUpdateWithoutLawyerProfilesInput.schema'
import { UserUncheckedUpdateWithoutLawyerProfilesInputObjectSchema } from './UserUncheckedUpdateWithoutLawyerProfilesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutLawyerProfilesNestedInput> =
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
      upsert: z
        .lazy(() => UserUpsertWithoutLawyerProfilesInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutLawyerProfilesInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutLawyerProfilesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict()

export const UserUpdateOneWithoutLawyerProfilesNestedInputObjectSchema = Schema
