export const RegOnlyNum = /^\d+$/;
export const RegValidPass = "(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[~@#$!%^*?&()])[A-Za-z\\d@$!%*?&]";
// eslint-disable-next-line no-useless-escape
export const RegValidStringEnglish = /^[~`!@#$%^&*()_+=[\]\{}|;':",.\\/<>?a-zA-Z0-9-]+$/;

// eslint-disable-next-line no-useless-escape
export const RegSpecicalChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
export const RegexLicensePlate = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
