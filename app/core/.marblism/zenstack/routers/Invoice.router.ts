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

        createMany: procedure.input($Schema.InvoiceInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).invoice.createMany(input as any))),

        create: procedure.input($Schema.InvoiceInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).invoice.create(input as any))),

        deleteMany: procedure.input($Schema.InvoiceInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).invoice.deleteMany(input as any))),

        delete: procedure.input($Schema.InvoiceInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).invoice.delete(input as any))),

        findFirst: procedure.input($Schema.InvoiceInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).invoice.findFirst(input as any))),

        findMany: procedure.input($Schema.InvoiceInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).invoice.findMany(input as any))),

        findUnique: procedure.input($Schema.InvoiceInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).invoice.findUnique(input as any))),

        updateMany: procedure.input($Schema.InvoiceInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).invoice.updateMany(input as any))),

        update: procedure.input($Schema.InvoiceInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).invoice.update(input as any))),

        count: procedure.input($Schema.InvoiceInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).invoice.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.InvoiceCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InvoiceCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InvoiceCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InvoiceCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.InvoiceCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InvoiceCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.InvoiceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.InvoiceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InvoiceCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InvoiceCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.InvoiceGetPayload<T>, Context>) => Promise<Prisma.InvoiceGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.InvoiceDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InvoiceDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InvoiceDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InvoiceDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.InvoiceDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InvoiceDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.InvoiceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.InvoiceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InvoiceDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InvoiceDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.InvoiceGetPayload<T>, Context>) => Promise<Prisma.InvoiceGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.InvoiceFindFirstArgs, TData = Prisma.InvoiceGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.InvoiceFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.InvoiceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.InvoiceFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.InvoiceFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.InvoiceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.InvoiceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.InvoiceFindManyArgs, TData = Array<Prisma.InvoiceGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.InvoiceFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.InvoiceGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.InvoiceFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.InvoiceFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.InvoiceGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.InvoiceGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.InvoiceFindUniqueArgs, TData = Prisma.InvoiceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.InvoiceFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.InvoiceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.InvoiceFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.InvoiceFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.InvoiceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.InvoiceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.InvoiceUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InvoiceUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InvoiceUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InvoiceUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.InvoiceUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.InvoiceUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.InvoiceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.InvoiceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.InvoiceUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.InvoiceUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.InvoiceGetPayload<T>, Context>) => Promise<Prisma.InvoiceGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.InvoiceCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.InvoiceCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.InvoiceCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.InvoiceCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.InvoiceCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.InvoiceCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.InvoiceCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.InvoiceCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
