/** Global type that will be returned by all service functions across the app */
export type ResponseType<T> = {
  data: T;
  error: string;
};
