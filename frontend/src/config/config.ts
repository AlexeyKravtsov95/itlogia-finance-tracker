const host = "http://localhost:3000";
const config = {
    host: host,
    api: host + '/api',
    typeCategories: {
        expenses: 'expense',
        income: 'income',
    }
} as const;

export default config;