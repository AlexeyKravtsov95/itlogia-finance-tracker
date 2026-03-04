export type OperationType = "income" | "expense";

export type OperationItemType = {
    id: number;
    type: OperationType;
    amount: number | string;
    date: string;
    comment: string;
    category: string;
};

export type CreateOperationDataType = {
    type: OperationType;
    amount: number | string;
    date: string;
    comment: string;
    category_id: number;
};

export type UpdateOperationDataType = {
    type?: OperationType;
    amount?: number | string;
    date?: string;
    comment?: string;
    category_id?: number;
};

export type GetOperationsParamsType = {
    dateFrom?: string;
    dateTo?: string;
};

export type ServiceResultType = {
    error: string | null;
    redirect: string | null;
};

export type GetOperationResultType = {
    error: string | null;
    redirect: string | null;
    operation: OperationItemType | null;
};

export type GetOperationsResultType = {
    error: string | null;
    redirect: string | null;
    response: OperationItemType[] | null;
};