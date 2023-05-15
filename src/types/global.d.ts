declare global {
  interface Customer {
    id?: number;
    name?: string;
    phone?: string;
    email?: string;
    gender?: string;
    birthday?: string;
    schedulingSMS?: boolean;
    marketingSMS?: boolean;
    info?: string;
    choosen?: boolean;
    camed?: boolean;
  }

  type Benefit = {
    benefit?: string;
    collaborator?: string;
    duration?: number;
    cost?: number;
  };
}

export {};
