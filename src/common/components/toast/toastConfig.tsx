import { BaseToast, ErrorToast, InfoToast, type ToastConfig } from 'react-native-toast-message';

export const toastConfig: ToastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      text1Props={{ numberOfLines: 3 }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      text1Props={{ numberOfLines: 3 }}
    />
  ),
  info: (props) => (
    <InfoToast
      {...props}
      text1Props={{ numberOfLines: 3 }}
    />
  ),
};
