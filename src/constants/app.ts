export const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

export const APP_CODE = "web";
export const ACCESS_TOKEN_KEY = `${APP_CODE}:access_token`;
export const REFRESH_ACCESS_TOKEN_KEY = `${APP_CODE}:refresh_token`;
export const USERNAME = "username";

export enum TypeSyncing {
  NOT_SYNC = 0,
  SYNCING = 1,
  SYNC_SUCCESS = 2,
  SYNC_FAIL = 3,
  SYNC_TIMEOUT = 4,
  NO_DATA = -1,
}
export enum ActionsTypeEnum {
  CREATE = "CREATE",
  READ = "READ",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  APPROVED = "APPROVED",
  HISTORY = "HISTORY",
}

export enum StatusEnum {
  SUCCESS = 0,
  FAIL = 1,
}
