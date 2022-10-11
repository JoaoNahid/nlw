export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Groups: undefined,
      Team: TeamParams,
      Coca: undefined,
      Museum: undefined,
      Stadiums: undefined,
      Qatar: undefined
    }
  }
}

export interface TeamParams {
  id: string;
  prefix: string;
  country: string
}