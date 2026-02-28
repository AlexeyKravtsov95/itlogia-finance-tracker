export type RefreshTokenType = {
    accessToken: string,
    refreshToken: string,
    error?: boolean
}

export type RefreshResponseType = {
    tokens?: RefreshTokenType,
    error?: boolean,
    message?: string
}