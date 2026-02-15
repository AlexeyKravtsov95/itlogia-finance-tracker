import {HttpUtils} from "../utils/http-utils";

export class MainService {
    static async getBalance() {
        const returnObject = {
            balance: null,
        }

        const result = await HttpUtils.request('/balance/')
        if (!result || !result.response || !result.response.balance) return;

        returnObject.balance = result.response.balance;
        return returnObject;
    }
}