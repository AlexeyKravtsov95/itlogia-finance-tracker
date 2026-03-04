export class UrlUtils {
    static getUrlParam(urlParam: string): string {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(urlParam);
    }
}