import { UUID } from "crypto";

export interface User {
    id: UUID;
    fullName?: string;
    avatarUrl?: string;
    billingAddress?: string;
    paymentMethod?: string;
    executions: number;
    payed: boolean;
    termsAccepted: boolean;
    createdAt: string;
    updatedAt: string;
    apiKey: string;
    clientContext?: string;
    version: string;
    fiatBased: boolean;
    email?: string;
    blocked: boolean;
}