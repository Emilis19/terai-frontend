export interface Account {
  id?: string;
  name: string;
  lastName: string;
  email: string;
  reviewedApplications: number;
  lastLoggedIn: string;
  password: string;
}

export interface AccountRequest {
  name: string;
  lastName: string;
  email: string;
  password: string;
  roles: Array<string>;
}
