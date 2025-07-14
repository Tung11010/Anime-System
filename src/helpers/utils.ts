/* eslint-disable no-prototype-builtins */
import { formatDateTime } from "@/constants";
import { FormInstance } from "antd";
import dayjs from "dayjs";
import { KeyboardEvent } from "react";
import { AnyElement, IFieldErrorsItem, IParamsRequest } from "../types";

export const flattenObject = (inputObj: { [key: string]: AnyElement }) => {
  const outputObj: { [key: string]: string } = {};

  for (const i in inputObj) {
    if (!inputObj.hasOwnProperty(i)) continue;

    if (typeof inputObj[i] === "object") {
      const flatObject = flattenObject(inputObj[i]);
      for (const x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;

        outputObj[i + "." + x] = flatObject[x];
      }
    } else {
      outputObj[i] = inputObj[i];
    }
  }
  return outputObj;
};
export const formatBigNumber = (source: number | string, separator: string = ",") =>
  source
    .toString()
    .split(/(?=(?:\d{3})+(?:\.|$))/g)
    .join(separator);

export const formatCurrency = (amount: number | string = 0): string => {
  return `${formatBigNumber(amount)} ₫`;
};

export const getParamsString = (data: object) => {
  const params = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(data).filter(([_, value]) => value !== undefined || value === null || value === "")
  );
  let stringParams = "";
  for (const property in params) {
    const value = (params as AnyElement)[property];
    const isArray = Array.isArray(value);
    if (value || value === 0) {
      if (isArray) {
        stringParams += `&${property}=${value.join(",")}`;
      } else {
        stringParams += `&${property}=${value}`;
      }
    }
  }
  return stringParams.slice(1);
};
export const formatTimestamp = (timeStamp: string | number, format?: string) => {
  return dayjs(timeStamp).format(format || formatDateTime);
};

export const normFile = (e: AnyElement) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
  if (
    !(
      e.key === "0" ||
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "Backspace" ||
      e.key === "Delete" ||
      e.key === "Tab" ||
      e.key === "Enter" ||
      (e.key === "a" && e.ctrlKey === true) || // Ctrl+A
      (e.key === "c" && e.ctrlKey === true) || // Ctrl+C
      (e.key === "v" && e.ctrlKey === true) || // Ctrl+V
      (e.key === "x" && e.ctrlKey === true) || // Ctrl+X
      (e.key === "A" && e.ctrlKey === true) || // Ctrl+Shift+A
      (e.key === "C" && e.ctrlKey === true) || // Ctrl+Shift+C
      (e.key === "V" && e.ctrlKey === true) || // Ctrl+Shift+V
      (e.key === "X" && e.ctrlKey === true)
    )
  ) {
    e.preventDefault();
  }
};

export function toPercent(target: number, source?: number): number {
  if (!source) return 100;
  if (source === 0) {
    throw new Error("Cannot divide by zero");
  }
  const result = (target / source) * 100;
  return parseFloat(result.toFixed(2));
}
export const downloadSampleCSV = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.stopPropagation();

  const link = document.createElement("a");
  link.href = import.meta.env.PUBLIC_URL + "/sample.csv"; // Path to your CSV file in the public folder
  link.download = "sample.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadSampleGz = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.stopPropagation();

  const link = document.createElement("a");
  link.href = import.meta.env.PUBLIC_URL + "/sample.vcf.gz"; // Path to your CSV file in the public folder
  link.download = "sample.vcf.gz";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const parseValue = (val: string): string | number | null | undefined => {
  if (val === "undefined") return undefined;
  if (val === "null") return null;
  return val;
};
export const cleanParams = (data: IParamsRequest) => {
  return Object.fromEntries(
    Object.entries(data)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => [key, String(value)])
  );
};

export const decodeSearchParams = <T = IParamsRequest>(searchParams: URLSearchParams) => {
  const defaultParams = {
    page: 1,
    limit: 20,
    status: undefined,
  };

  const parsedParams = Object.fromEntries([...searchParams.entries()].map(([key, val]) => [key, parseValue(val)]));

  return {
    ...defaultParams,
    ...parsedParams,
    page: parsedParams.page ? Number(parsedParams.page) : defaultParams.page,
    limit: parsedParams.limit ? Number(parsedParams.limit) : defaultParams.limit,
    status: parsedParams.status ? Number(parsedParams.status) : defaultParams.status,
    q: parsedParams.q ? parsedParams.q : undefined,
  } as T;
};

export const setErrorForm = (form: FormInstance, errors: IFieldErrorsItem[]) => {
  if (errors.length > 0) {
    form.setFields(
      errors.map((item) => ({
        name: item.field,
        errors: [item.details],
      }))
    );
  }
};
