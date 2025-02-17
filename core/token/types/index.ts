export interface IRealmAccess {
  roles: string[];
}

export interface IBroker {
  broker: {
    roles: string[];
  };
}

export interface IAccount {
  account: {
    roles: string[];
  };
}

export interface IResourceAccess {
  broker: IBroker;
  account: IAccount;
}

export interface IDecodedToken {
  exp: number;
  iat: number;
  jti: string;
  iss: string;
  aud: string[];
  sub: string;
  typ: string;
  azp: string;
  session_state: string;
  acr: string;
  realm_access: IRealmAccess;
  resource_access: IResourceAccess;
  scope: string;
  sid: string;
  email_verified: boolean;
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
}
