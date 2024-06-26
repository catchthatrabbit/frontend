import { useQuery } from "@tanstack/react-query";
import { useMessage } from "./useMessage";
import { DEFAULT_REACT_QUERY_OPTIONS } from "@site/src/configs/reactQuery.config";
import { useEffect } from "react";

export const useQueryConfigured = <T>(
  fnProps: unknown,
  queryKey?: string,
  fetchFn?: (fnProps: unknown) => unknown,
  enabled: boolean = true,
) => {
  const { setMessage, message } = useMessage();

  const { data, isError, error, isLoading } = useQuery({
    queryKey: [queryKey, Object.values(fnProps)],
    queryFn: () => fetchFn(fnProps),
    ...DEFAULT_REACT_QUERY_OPTIONS,
    enabled,
  });

  useEffect(() => {
    if (isError && (message === null || message.text === null))
      setMessage({ text: error.message, type: "error" });
    else if (!isError && message.text && message.type)
      setMessage({ text: null, type: null });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error?.message, isError]);

  return { data: data as T, isLoading };
};
