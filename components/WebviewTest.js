import { WebView } from 'react-native-webview';

export function WebviewScreen() {
    return (
      <WebView
        source={{ 
            uri: 'http://192.168.178.134/cookie.php',
            headers: {
                Cookie: 'cookie1=test; cookie2=dfasdfdas',
            },
        }}
        sharedCookiesEnabled={true}
      />
    );
  }