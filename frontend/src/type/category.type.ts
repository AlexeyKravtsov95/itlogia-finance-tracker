export type CategoryType = "income" | "expense";

export type CategoryItemType = {
    id: number;
    title: string;
};

export type CreateCategoryDataType = {
    title: string;
};

export type UpdateCategoryDataType = {
    title?: string;
};

export type CreateCategoryResultType = {
    error: string | null;
    redirect: string | null;
    id: number | null;
};

export type GetAllCategoriesResultType = {
    error: string | null;
    redirect: string | null;
    categories: CategoryItemType[] | null;
};

export type GetCategoryResultType = {
    error: string | null;
    redirect: string | null;
    category: CategoryItemType | null;
};

export type ActionCategoryResultType = {
    error: string | null;
    redirect: string | null;
};