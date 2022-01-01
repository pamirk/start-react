import React, {
  Context,
  Dispatch,
  ReactNode,
  createContext,
  useReducer
} from "react";

import { getGithubAccesses } from "./API";
import { useAsync } from "./Hookah";

export const REPO_OPEN = true;
export const REPO_CLOSE = false;
export const REPO_INVITED = null;
export const REPO_LOADING = undefined;
export type GithubAccess =
  | typeof REPO_OPEN
  | typeof REPO_CLOSE
  | typeof REPO_INVITED
  | typeof REPO_LOADING;

export type Repository =
  | "react-native-gestures-and-animations"
  | "react-native-gestures-and-animations-2"
  | "react-native-fashion"
  | "can-it-be-done-in-react-native-private";

type GithubState = {
  [repo in Repository]: GithubAccess;
};

const reducer = (_: GithubState, payload: GithubState) => payload;

export const GITHUB_LOADING_STATE = {
  "react-native-gestures-and-animations": REPO_LOADING,
  "react-native-gestures-and-animations-2": REPO_LOADING,
  "react-native-fashion": REPO_LOADING,
  "can-it-be-done-in-react-native-private": REPO_LOADING
};

export const GithubContext: Context<
  [GithubState, Dispatch<GithubState>]
  // @ts-ignore
> = createContext();

interface GithubProviderProps {
  children: ReactNode;
}

export default ({ children }: GithubProviderProps) => {
  const [value, dispatch] = useReducer(reducer, GITHUB_LOADING_STATE);
  useAsync(async () => {
    const repos = await getGithubAccesses();
    dispatch(repos);
  }, []);
  return (
    <GithubContext.Provider value={[value, dispatch]}>
      {children}
    </GithubContext.Provider>
  );
};
