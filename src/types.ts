// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyElement = any;

export interface IParamsRequest {
  page: number;
  limit: number;
  status?: string;
  q?: string;
}


export interface IPage<T> {
  content: T[];
  totalRecords: number;
  page: number;
  limit: number;
  data?: T[];
  totalDocs?: number;
  nextPage?: number;
  hasNextPage?: boolean;
}

export interface IFieldErrorsItem {
  field: string;
  details: string;
}

export interface IErrorResponse {
  message: string;
  status: number;
  errors: IFieldErrorsItem[];
}

export interface IUser {
  id: string;
  name: string;
  phone: string;
  image: string;
  roleId: IRoleId;
  needChangePassword: boolean;
}

export interface IRoleId {
  name: string;
}

export interface IOption {
  label: string;
  value: string;
  [k: string]: AnyElement;
}

export enum ModalActionEnum {
  CLOSE = "",
  VIEW = "VIEW",
  CREATE = "CREATE",
  EDIT = "EDIT",
  DELETE = "DELETE",
}
export enum ModalTypeEnum {
  CLOSE = "",
  DRAWER = "DRAWER",
  POPUP = "POPUP",
  CONFIRM = "CONFIRM",
}

export interface IModalBase {
  type: ModalTypeEnum;
  open: ModalActionEnum;
}

export interface IModalWithId extends IModalBase {
  open: ModalActionEnum.VIEW | ModalActionEnum.EDIT | ModalActionEnum.DELETE;
  id: string;
}

export interface IModalWithoutId extends IModalBase {
  open: ModalActionEnum.CLOSE | ModalActionEnum.CREATE;
  id?: undefined;
}

export type IModalDetail = IModalWithId | IModalWithoutId;

import { UploadFile } from "antd";

export interface IOrder {
  id: string;
  customer:
    | string
    | {
        id: string;
        fullName: string;
        phone: string;
      };
  orderItems: IProduct[] | string;
  totalAmount: number;
  paymentsCash: number;
  discount: number;
  createdAt: string;
  updatedAt: string;
  remainingAmount: number;
  paidAmount: number;
  paymentStatus: OrderStatusEnum;
  code: string;
}

export interface IProduct {
  barcode: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  status: boolean;
  id: string;
  promotion: Promotion;
  discountValue: number;
  finalPrice: number;
  productAttributes: { name: string; id: string; type: ProductAttributeEnum }[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  images: File[] | string[] | UploadFile[];
  orderQuantity: number;
}
export enum OrderStatusEnum {
  PAID = "paid",
  PARTIAL = "partial",
  UNPAID = "unpaid",
}

export interface Promotion {
  id: string;
  code: string;
  name: string;
  type: string;
  actualValue: number;
}
export enum ProductAttributeEnum {
  PRODUCT_TYPES = "producttypes",
  TRADEMARK = "trademark",
  ALL = "all",
}
