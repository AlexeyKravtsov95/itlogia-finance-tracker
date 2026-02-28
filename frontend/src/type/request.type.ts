export type ParamsRequestType = {
    method: string,
    headers: HeadersRequest,
    body?: any,
}

export type HeadersRequest = {
    "Content-Type": string;
    Accept: string;
    "x-auth-token"?: string;
}