/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import { PrismaClient } from "@prisma/client";
import createUserRouter from "./User.router";
import createLawyerProfileRouter from "./LawyerProfile.router";
import createCaseRouter from "./Case.router";
import createInvoiceRouter from "./Invoice.router";
import createCaseNoteRouter from "./CaseNote.router";
import createMessageRouter from "./Message.router";
import createDocumentRouter from "./Document.router";
import createOrganizationRouter from "./Organization.router";
import createOrganizationRoleRouter from "./OrganizationRole.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as LawyerProfileClientType } from "./LawyerProfile.router";
import { ClientType as CaseClientType } from "./Case.router";
import { ClientType as InvoiceClientType } from "./Invoice.router";
import { ClientType as CaseNoteClientType } from "./CaseNote.router";
import { ClientType as MessageClientType } from "./Message.router";
import { ClientType as DocumentClientType } from "./Document.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as OrganizationRoleClientType } from "./OrganizationRole.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        lawyerProfile: createLawyerProfileRouter(router, procedure),
        case: createCaseRouter(router, procedure),
        invoice: createInvoiceRouter(router, procedure),
        caseNote: createCaseNoteRouter(router, procedure),
        message: createMessageRouter(router, procedure),
        document: createDocumentRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        organizationRole: createOrganizationRoleRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    lawyerProfile: LawyerProfileClientType<AppRouter>;
    case: CaseClientType<AppRouter>;
    invoice: InvoiceClientType<AppRouter>;
    caseNote: CaseNoteClientType<AppRouter>;
    message: MessageClientType<AppRouter>;
    document: DocumentClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    organizationRole: OrganizationRoleClientType<AppRouter>;
}
