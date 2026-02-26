export class FileUtils {
    static loadPageScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve(`Script loaded ${script}`);
            script.onerror = () => reject(new Error(`Script error ${script}`));
            document.body.appendChild(script);
        })
    }
}