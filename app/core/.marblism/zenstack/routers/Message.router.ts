/* eslint-disable */
import * as _Schema from '@zenstackhq/runtime/zod/input';
import { type BaseConfig, db, type ProcBuilder, type RouterFactory } from ".";
// const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import type { Prisma } from '@prisma/client';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult, UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult } from '@trpc/react-query/shared';
import type { AnyRouter } from '@trpc/server';
import { checkMutate, checkRead } from '../helper';
const $Schema: typeof _Schema & { MessageInputSchema: any } = (_Schema as any).default ?? _Schema;


export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.MessageInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).message.createMany(input as any))),

        create: procedure.input($Schema.MessageInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).message.create(input as any))),

        deleteMany: procedure.input($Schema.MessageInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).message.deleteMany(input as any))),

        delete: procedure.input($Schema.MessageInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).message.delete(input as any))),

        findFirst: procedure.input($Schema.MessageInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).message.findFirst(input as any))),

        findMany: procedure.input($Schema.MessageInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).message.findMany(input as any))),

        findUnique: procedure.input($Schema.MessageInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).message.findUnique(input as any))),

        updateMany: procedure.input($Schema.MessageInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).message.updateMany(input as any))),

        update: procedure.input($Schema.MessageInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).message.update(input as any))),

        count: procedure.input($Schema.MessageInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).message.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.MessageCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.MessageCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MessageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MessageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MessageGetPayload<T>, Context>) => Promise<Prisma.MessageGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.MessageDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.MessageDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MessageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MessageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MessageGetPayload<T>, Context>) => Promise<Prisma.MessageGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.MessageFindFirstArgs, TData = Prisma.MessageGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.MessageFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MessageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MessageFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.MessageFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MessageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MessageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.MessageFindManyArgs, TData = Array<Prisma.MessageGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.MessageFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.MessageGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MessageFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.MessageFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.MessageGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.MessageGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.MessageFindUniqueArgs, TData = Prisma.MessageGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MessageFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MessageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MessageFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MessageFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MessageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MessageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.MessageUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.MessageUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MessageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MessageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MessageGetPayload<T>, Context>) => Promise<Prisma.MessageGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.MessageCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.MessageCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.MessageCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.MessageCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.MessageCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.MessageCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.MessageCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.MessageCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
