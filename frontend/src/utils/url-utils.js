export class UrlUtils {
    static getUrlParam(urlParam) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(urlParam);
    }
}