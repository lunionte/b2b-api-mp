export interface IUsersModel {
    id?: string;
    name?: string;
    email: string;
    isConfirmedEmail?: boolean;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
    mpUserId?: string;
    mpAcessToken?: string;
    mpRefreshToken?: string;
    mpExpiresAt?: string;
}

export interface IStoreModel {
    id?: string;
    name: string;
    slug?: string;
    ownerId: string;
    createdAt?: Date;
}

export interface IProductModel {
    id?: string;
    name: string;
    description?: string;
    price: string;
    paymentLink: string;
    status: Status;
    createdAt?: Date;
}

export interface IWebHookModel {
    id?: string;
    type: string;
    data: unknown;
    receivedAt: Date;
}

enum Status {
    CANCELADO = "CANCELADO",
    PENDENTE = "PENDENTE",
    APROVADO = "APROVADO",
}
