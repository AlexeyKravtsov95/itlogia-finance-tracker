export class FileUtils {
    static loadPageScript(src: string): Promise<string> {
        return new Promise((resolve: (value: (string | PromiseLike<string>)) => void, reject: (reason?: any) => void): void => {
            const script: HTMLScriptElement = document.createElement('script');
            script.src = src;
            script.onload = () => resolve(`Script loaded ${script}`);
            script.onerror = () => reject(new Error(`Script error ${script}`));
            document.body.appendChild(script);
        })
    }
}