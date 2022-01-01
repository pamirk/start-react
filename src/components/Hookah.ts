import { useEffect } from "react";

type DependencyList = readonly unknown[];
type EffectCallback = () => Promise<unknown>;

export const useAsync = (effect: EffectCallback, deps?: DependencyList) =>
  useEffect(() => {
    effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
