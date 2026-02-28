export type RoutesType = {
    route: string,
    title?: string,
    filePath?: string,
    useLayout: string | null,
    scripts?: Array<string>,
    load?(): void,
    unload?(): void,
}

export type OpenNewRouteType = (url:string) => void | Promise<void>;