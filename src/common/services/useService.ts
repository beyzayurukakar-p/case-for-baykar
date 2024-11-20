import { useCallback, useState } from 'react';
import Toast from 'react-native-toast-message';
import { TextKeys, useLocalization } from '../../core/localization';
import { AsyncReturnType } from '../utils/typeUtils';

export type RequesterFunction = (args?: any) => Promise<any>;

type Options<Data> = {
  shouldDisplayLoading?: boolean;
  shouldDisplayError?: boolean;
  onSuccess?: (data: Data) => void;
  onError?: (error: string) => void;
  onComplete?: () => void;
};

export const useService = <RF extends RequesterFunction>(requesterFunc: RF) => {
  const { t } = useLocalization();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<AsyncReturnType<RF> | null>(null);

  const request = useCallback(
    (args: Parameters<RF>[0], options?: Options<AsyncReturnType<RF>>) => {
      setLoading(true);
      requesterFunc(args)
        .then((returnedData: AsyncReturnType<RF>) => {
          // Update state
          setData(returnedData);
          // Call event handler callback
          options?.onSuccess?.(returnedData);
        })
        .catch((err: TextKeys) => {
          Toast.show({
            type: 'error',
            text1: t(err),
          });

          // Call event handler callback
          options?.onError?.(err);
        })
        .finally(() => {
          setLoading(false);
          options?.onComplete?.();
        });
    },
    [requesterFunc, t]
  );

  return {
    loading,
    data,
    request,
  };
};
