import { useState, useEffect, useCallback } from 'react';

type Status = 'idle' | 'pending' | 'success' | 'error';

interface AsyncState<T> {
  status: Status;
  value: T | null;
  error: Error | null | unknown;
  loading: boolean;
}

function useAsync<T, A extends any[]>(asyncFunction: (args?: A) => Promise<T>, immediate = true, values: A ) {
  const [asyncState, setAsyncState] = useState<AsyncState<T>>({
    status: 'idle',
    value: null,
    error: null,
    loading: false,
  });

  const  execute = useCallback(
    async (args?: A) => {
        setAsyncState((prevState) => ({
          ...prevState,
          loading: true,
          status: 'pending',
          value: null,
          error: null,
        }));
        try {
          const result = await asyncFunction(args);
          setAsyncState({ status: 'success', value: result, error: null, loading: false });
        } catch (error) {
          setAsyncState({ status: 'error', value: null, error, loading: false });
        }
      },
    [asyncFunction],
  )
  


  useEffect(() => {
    if (immediate) {
      execute(values);
    }
 
  }, [asyncFunction, immediate]);

  return {
    execute,
    ...asyncState,
  };
}

export default useAsync;