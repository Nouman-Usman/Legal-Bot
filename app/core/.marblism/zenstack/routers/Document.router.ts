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

        createMany: procedure.input($Schema.DocumentInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).document.createMany(input as any))),

        create: procedure.input($Schema.DocumentInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).document.create(input as any))),

        deleteMany: procedure.input($Schema.DocumentInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).document.deleteMany(input as any))),

        delete: procedure.input($Schema.DocumentInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).document.delete(input as any))),

        findFirst: procedure.input($Schema.DocumentInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).document.findFirst(input as any))),

        findMany: procedure.input($Schema.DocumentInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).document.findMany(input as any))),

        findUnique: procedure.input($Schema.DocumentInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).document.findUnique(input as any))),

        updateMany: procedure.input($Schema.DocumentInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).document.updateMany(input as any))),

        update: procedure.input($Schema.DocumentInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).document.update(input as any))),

        count: procedure.input($Schema.DocumentInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).document.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.DocumentCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DocumentCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DocumentCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DocumentCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.DocumentCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DocumentCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DocumentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DocumentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DocumentCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DocumentCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DocumentGetPayload<T>, Context>) => Promise<Prisma.DocumentGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.DocumentDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DocumentDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DocumentDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DocumentDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.DocumentDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DocumentDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DocumentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DocumentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DocumentDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DocumentDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DocumentGetPayload<T>, Context>) => Promise<Prisma.DocumentGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.DocumentFindFirstArgs, TData = Prisma.DocumentGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.DocumentFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DocumentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DocumentFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.DocumentFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DocumentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DocumentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.DocumentFindManyArgs, TData = Array<Prisma.DocumentGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.DocumentFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.DocumentGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DocumentFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.DocumentFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.DocumentGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.DocumentGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.DocumentFindUniqueArgs, TData = Prisma.DocumentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.DocumentFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DocumentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DocumentFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DocumentFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DocumentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DocumentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.DocumentUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DocumentUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DocumentUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DocumentUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.DocumentUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DocumentUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DocumentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DocumentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DocumentUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DocumentUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DocumentGetPayload<T>, Context>) => Promise<Prisma.DocumentGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.DocumentCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.DocumentCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.DocumentCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.DocumentCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.DocumentCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.DocumentCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.DocumentCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.DocumentCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
