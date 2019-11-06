/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace Express {
  export interface Request {
    session: {
      email?: string;
    };
  }
}
