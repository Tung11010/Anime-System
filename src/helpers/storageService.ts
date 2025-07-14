import { ACCESS_TOKEN_KEY, REFRESH_ACCESS_TOKEN_KEY, USERNAME } from "@/constants";

export const StorageService = {
  setCookie(name: string, value: string, seconds?: number) {
    let expires = "";
    if (seconds) {
      const date = new Date();
      date.setTime(date.getTime() + seconds * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  },
  getCookie(name: string) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return nameEQ ?? "";
  },

  eraseCookie(name: string) {
    document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  },

  get(key: string, defaultValue: string = "") {
    const value = localStorage.getItem(key);
    return value ? value : defaultValue;
  },

  set(key: string, value: string = "") {
    localStorage.setItem(key, value);
  },

  remove(key: string) {
    localStorage.removeItem(key);
  },

  getAccessToken(): string {
    return this.getCookie(ACCESS_TOKEN_KEY);
  },

  setAccessToken(token: string, seconds?: number) {
    this.setCookie(ACCESS_TOKEN_KEY, token, seconds);
  },

  setRefreshToken(token: string, seconds?: number) {
    this.setCookie(REFRESH_ACCESS_TOKEN_KEY, token, seconds);
  },

  getRefreshToken(): string {
    return this.getCookie(REFRESH_ACCESS_TOKEN_KEY);
  },

  setUserNameAccount(userName: string) {
    this.set(USERNAME, userName);
  },

  getUserNameAccount(): string {
    return this.get(USERNAME);
  },

  removeToken() {
    this.eraseCookie(ACCESS_TOKEN_KEY);
    this.eraseCookie(REFRESH_ACCESS_TOKEN_KEY);
    this.remove(USERNAME);
  },
};
