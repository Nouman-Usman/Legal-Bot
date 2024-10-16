/* eslint-disable */
import { Prisma } from '@prisma/client';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult, UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult } from '@trpc/react-query/shared';
import type { AnyRouter } from '@trpc/server';
import * as _Schema from '@zenstackhq/runtime/zod/input';
import { type BaseConfig, db, type ProcBuilder, type RouterFactory } from ".";
import { checkMutate, checkRead } from '../helper';
const $Schema: typeof _Schema & { CaseNoteInputSchema: any } = (_Schema as any).default ?? _Schema;

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.CaseNoteInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).caseNote.createMany(input as any))),

        create: procedure.input($Schema.CaseNoteInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).caseNote.create(input as any))),

        deleteMany: procedure.input($Schema.CaseNoteInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).caseNote.deleteMany(input as any))),

        delete: procedure.input($Schema.CaseNoteInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).caseNote.delete(input as any))),

        findFirst: procedure.input($Schema.CaseNoteInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).caseNote.findFirst(input as any))),

        findMany: procedure.input($Schema.CaseNoteInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).caseNote.findMany(input as any))),

        findUnique: procedure.input($Schema.CaseNoteInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).caseNote.findUnique(input as any))),

        updateMany: procedure.input($Schema.CaseNoteInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).caseNote.updateMany(input as any))),

        update: procedure.input($Schema.CaseNoteInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).caseNote.update(input as any))),

        count: procedure.input($Schema.CaseNoteInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).caseNote.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.CaseNoteCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CaseNoteCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CaseNoteCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CaseNoteCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.CaseNoteCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CaseNoteCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CaseNoteGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CaseNoteGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CaseNoteCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CaseNoteCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CaseNoteGetPayload<T>, Context>) => Promise<Prisma.CaseNoteGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.CaseNoteDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CaseNoteDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CaseNoteDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CaseNoteDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.CaseNoteDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CaseNoteDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CaseNoteGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CaseNoteGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CaseNoteDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CaseNoteDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CaseNoteGetPayload<T>, Context>) => Promise<Prisma.CaseNoteGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.CaseNoteFindFirstArgs, TData = Prisma.CaseNoteGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.CaseNoteFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CaseNoteGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CaseNoteFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CaseNoteFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CaseNoteGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CaseNoteGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.CaseNoteFindManyArgs, TData = Array<Prisma.CaseNoteGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.CaseNoteFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.CaseNoteGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CaseNoteFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CaseNoteFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CaseNoteGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.CaseNoteGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.CaseNoteFindUniqueArgs, TData = Prisma.CaseNoteGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CaseNoteFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CaseNoteGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CaseNoteFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CaseNoteFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CaseNoteGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CaseNoteGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.CaseNoteUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CaseNoteUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CaseNoteUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CaseNoteUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.CaseNoteUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CaseNoteUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CaseNoteGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CaseNoteGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CaseNoteUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CaseNoteUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CaseNoteGetPayload<T>, Context>) => Promise<Prisma.CaseNoteGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.CaseNoteCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CaseNoteCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.CaseNoteCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.CaseNoteCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.CaseNoteCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.CaseNoteCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.CaseNoteCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CaseNoteCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
