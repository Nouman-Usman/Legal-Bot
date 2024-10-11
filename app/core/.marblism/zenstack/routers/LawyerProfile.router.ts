/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.LawyerProfileInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).lawyerProfile.createMany(input as any))),

        create: procedure.input($Schema.LawyerProfileInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).lawyerProfile.create(input as any))),

        deleteMany: procedure.input($Schema.LawyerProfileInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).lawyerProfile.deleteMany(input as any))),

        delete: procedure.input($Schema.LawyerProfileInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).lawyerProfile.delete(input as any))),

        findFirst: procedure.input($Schema.LawyerProfileInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).lawyerProfile.findFirst(input as any))),

        findMany: procedure.input($Schema.LawyerProfileInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).lawyerProfile.findMany(input as any))),

        findUnique: procedure.input($Schema.LawyerProfileInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).lawyerProfile.findUnique(input as any))),

        updateMany: procedure.input($Schema.LawyerProfileInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).lawyerProfile.updateMany(input as any))),

        update: procedure.input($Schema.LawyerProfileInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).lawyerProfile.update(input as any))),

        count: procedure.input($Schema.LawyerProfileInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).lawyerProfile.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.LawyerProfileCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LawyerProfileCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LawyerProfileCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LawyerProfileCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.LawyerProfileCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LawyerProfileCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LawyerProfileGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LawyerProfileGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LawyerProfileCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LawyerProfileCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LawyerProfileGetPayload<T>, Context>) => Promise<Prisma.LawyerProfileGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.LawyerProfileDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LawyerProfileDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LawyerProfileDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LawyerProfileDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.LawyerProfileDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LawyerProfileDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LawyerProfileGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LawyerProfileGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LawyerProfileDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LawyerProfileDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LawyerProfileGetPayload<T>, Context>) => Promise<Prisma.LawyerProfileGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.LawyerProfileFindFirstArgs, TData = Prisma.LawyerProfileGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.LawyerProfileFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LawyerProfileGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LawyerProfileFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.LawyerProfileFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LawyerProfileGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.LawyerProfileGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.LawyerProfileFindManyArgs, TData = Array<Prisma.LawyerProfileGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.LawyerProfileFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.LawyerProfileGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LawyerProfileFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.LawyerProfileFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.LawyerProfileGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.LawyerProfileGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.LawyerProfileFindUniqueArgs, TData = Prisma.LawyerProfileGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.LawyerProfileFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LawyerProfileGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LawyerProfileFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LawyerProfileFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LawyerProfileGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.LawyerProfileGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.LawyerProfileUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LawyerProfileUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LawyerProfileUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LawyerProfileUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.LawyerProfileUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LawyerProfileUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LawyerProfileGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LawyerProfileGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LawyerProfileUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LawyerProfileUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LawyerProfileGetPayload<T>, Context>) => Promise<Prisma.LawyerProfileGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.LawyerProfileCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.LawyerProfileCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.LawyerProfileCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.LawyerProfileCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.LawyerProfileCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.LawyerProfileCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.LawyerProfileCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.LawyerProfileCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
