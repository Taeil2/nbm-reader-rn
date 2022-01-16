import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ArticleScreen(props) {
  const { route } = props;
  console.log('url', route.params.url);

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri: 'https://reactnative.dev'
        }}
        style={{ flex: 1 }} />
      <StatusBar style="auto" />
    </View>
  );
}
