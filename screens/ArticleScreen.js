import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ArticleScreen(props) {
  const { route } = props;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri: route.params.url,
        }}
        style={{ flex: 1 }} />
      <StatusBar style="auto" />
    </View>
  );
}
