import {HttpUtils} from "../utils/http-utils";
import {
    CreateOperationDataType,
    GetOperationResultType,
    GetOperationsParamsType, GetOperationsResultType,
    ServiceResultType, UpdateOperationDataType
} from "../type/operation.type";
import {ResultResponeType} from "../type/result-respone.type";

export class OperationService {
    static async createOperation(data: CreateOperationDataType): Promise<ServiceResultType> {
        const returnObject: ServiceResultType = {
            error: null,
            redirect: null,
        }

        const result: ResultResponeType = await HttpUtils.request('/operations', 'POST', true, data);
        if (result.redirect || result.error || !result.response || (result.response && result.response.error)) {
            returnObject.error = 'Возникла ошибка при создании операции. Обратитесь в поддержку';
            console.error('Ошибка HTTP запроса:', result);
            if (result.redirect) {
                returnObject.redirect = result.redirect;
            }
            return returnObject;
        }
        return returnObject;
    }

    static async getOperation(id: string): Promise<GetOperationResultType> {
        const returnObject: GetOperationResultType = {
            error: null,
            redirect: null,
            operation: null
        }

        const result: ResultResponeType = await HttpUtils.request(`/operations/${id}`);
        if (result.redirect || result.error || !result.response || (result.response && result.response.error)) {
            returnObject.error = 'Возникла ошибка при получении операции. Обратитесь в поддержку';
            console.error('Ошибка HTTP запроса:', result);
            if (result.redirect) {
                returnObject.redirect = result.redirect;
            }
            return returnObject;
        }

        returnObject.operation = result.response;
        return returnObject;
    }

    static async getOperations(period: string, params: GetOperationsParamsType = {}): Promise<GetOperationsResultType> {
        const returnObject: GetOperationsResultType = {
            error: null,
            response: null,
            redirect: null,
        }

        const queryParams = new URLSearchParams({period});

        if (period === 'interval') {
            if (params.dateFrom) {
                queryParams.set('dateFrom', params.dateFrom);
            }
            if (params.dateTo) {
                queryParams.set('dateTo', params.dateTo);
            }
        }

        const result: ResultResponeType = await HttpUtils.request(`/operations?${queryParams.toString()}`);

        if (result.redirect || result.error || !result.response || (result.response && result.response.error)) {
            returnObject.error = 'Возникла ошибка при получении списка операций. Обратитесь в поддержку';
            console.error('Ошибка HTTP запроса:', result);
            if (result.redirect) {
                returnObject.redirect = result.redirect;
            }
            return returnObject;
        }

        if (!Array.isArray(result.response)) {
            returnObject.error = "Ожидался массив данных"
            return returnObject
        }

        returnObject.response = result.response;
        return returnObject;
    }

    static async updateOperation(id: string, data: UpdateOperationDataType): Promise<ServiceResultType> {
        const returnObject: ServiceResultType = {
            error: null,
            redirect: null,
        }

        const result: ResultResponeType = await HttpUtils.request(`/operations/${id}`, "PUT", true, data);
        if (result.redirect || result.error || !result.response || (result.response && result.response.error)) {
            returnObject.error = 'Возникла ошибка при обновлении операции. Обратитесь в поддержку';
            console.error('Ошибка HTTP запроса:', result);
            if (result.redirect) {
                returnObject.redirect = result.redirect;
            }
            return returnObject;
        }

        return returnObject;
    }

    static async deleteOperation(id: string): Promise<ServiceResultType> {
        const returnObject: ServiceResultType = {
            error: null,
            redirect: null,
        }

        const result: ResultResponeType = await HttpUtils.request(`/operations/${id}`,'DELETE');

        if (result.redirect || result.error || !result.response || (result.response && result.response.error)) {
            returnObject.error = 'Возникла ошибка при удалении операции. Обратитесь в поддержку';
            if (result.redirect) {
                returnObject.redirect = result.redirect;
            }
            return returnObject;
        }

        return returnObject;
    }
}