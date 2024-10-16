import { z } from 'zod'

export const UserStatusSchema = z.enum(['INVITED', 'VERIFIED'])
