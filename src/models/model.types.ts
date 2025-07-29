import { JwtPayload } from "jsonwebtoken";

export interface IUsersModel {
    id?: string;
    name?: string | null;
    email: string;
    isConfirmedEmail?: boolean;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
    mpUserId?: string | null;
    mpAcessToken?: string | null;
    mpRefreshToken?: string | null;
    mpExpiresAt?: string | null;
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

export interface TokenPayload extends JwtPayload {
    sub: string;
}

enum Status {
    CANCELADO = "CANCELADO",
    PENDENTE = "PENDENTE",
    APROVADO = "APROVADO",
}

export function toUserDto(user: IUsersModel) {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        // password apenas para fins de teste
        password: user.password,
    };
}

export function toUsersDto(user: IUsersModel[]) {
    return user.map(toUserDto);
}
