export type AuthUtilsType = {
    accessToken?: string | null,
    refreshToken?: string | null,
    userInfo?: string | null,
    rememberMe?: string | null,
}

export enum AuthKey {
    accessToken = 'accessToken',
    refreshToken = 'refreshToken',
    userInfo = 'userInfo',
    rememberMe = 'rememberMe',
}

export type AuthUserType = {
    id: number,
    email: string,
    name: string,
    lastName: string,
}

export type AuthTokensType = {
    accessToken: string,
    refreshToken: string,
}

export type AuthResponseType = {
    user: AuthUserType,
    tokens?: AuthTokensType,
    error?: boolean,
    message?: string,
}

export type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}

export type LogoutDataType = {
    refreshToken: string | null,
}

export type SignUpDataType = {
    name: string,
    lastName: string,
    email: string,
    password: string,
    passwordRepeat: string,
}

