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

        createMany: procedure.input($Schema.CaseInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).case.createMany(input as any))),

        create: procedure.input($Schema.CaseInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).case.create(input as any))),

        deleteMany: procedure.input($Schema.CaseInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).case.deleteMany(input as any))),

        delete: procedure.input($Schema.CaseInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).case.delete(input as any))),

        findFirst: procedure.input($Schema.CaseInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).case.findFirst(input as any))),

        findMany: procedure.input($Schema.CaseInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).case.findMany(input as any))),

        findUnique: procedure.input($Schema.CaseInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).case.findUnique(input as any))),

        updateMany: procedure.input($Schema.CaseInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).case.updateMany(input as any))),

        update: procedure.input($Schema.CaseInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).case.update(input as any))),

        count: procedure.input($Schema.CaseInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).case.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.CaseCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CaseCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CaseCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CaseCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.CaseCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CaseCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CaseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CaseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CaseCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CaseCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CaseGetPayload<T>, Context>) => Promise<Prisma.CaseGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.CaseDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CaseDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CaseDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CaseDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.CaseDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CaseDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CaseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CaseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CaseDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CaseDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CaseGetPayload<T>, Context>) => Promise<Prisma.CaseGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.CaseFindFirstArgs, TData = Prisma.CaseGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.CaseFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CaseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CaseFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CaseFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CaseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CaseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.CaseFindManyArgs, TData = Array<Prisma.CaseGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.CaseFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.CaseGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CaseFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CaseFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CaseGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.CaseGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.CaseFindUniqueArgs, TData = Prisma.CaseGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CaseFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CaseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CaseFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CaseFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CaseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CaseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.CaseUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CaseUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CaseUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CaseUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.CaseUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CaseUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CaseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CaseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CaseUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CaseUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CaseGetPayload<T>, Context>) => Promise<Prisma.CaseGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.CaseCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CaseCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.CaseCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.CaseCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.CaseCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.CaseCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.CaseCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CaseCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
