export type ResponseData<T> = {
    statusCode: number;
    message: string;
    content: T;
    dateTime: string;
    messageConstants: string | null;
  };