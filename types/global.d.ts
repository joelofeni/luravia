// Extend ProcessEnv for environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    MONGODB_URI: string;
    NEXT_PUBLIC_APP_NAME?: string;
  }
}

declare module "*.css";
