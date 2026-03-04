import {HttpUtils} from "../utils/http-utils";
import {ResultResponeType} from "../type/result-respone.type";
import {BalanceType} from "../type/balance.type";

export class MainService {
    static async getBalance(): Promise<BalanceType> {
        const returnObject: BalanceType = {
            balance: null,
        }

        const result: ResultResponeType = await HttpUtils.request('/balance')
        if (!result || !result.response || result.response.balance === null || result.response.balance === undefined) {
            return returnObject;
        }

        returnObject.balance = result.response.balance;
        return returnObject;
    }
}