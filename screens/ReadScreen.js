import { StatusBar } from 'expo-status-bar';

import Article from './../components/Article';
import { View, TouchableOpacity } from 'react-native';
import { Link } from '@react-navigation/native';

export default function ReadScreen() {
  const openUrl = (url) => {
    navigation.navigate(
      'Article',
      { url: url }
    );
  }

  return (
    <View>
      <TouchableOpacity onPress={() => openUrl('https://www.cnbc.com/2022/01/04/cramer-okta-versus-deere-is-the-best-way-to-understand-the-market.html')} >
        <Article />
      </TouchableOpacity>
      <Article key={1} />
      <Article key={2} />
      <Link to={{ screen: 'Article', params: { url: 'https://www.cnbc.com/2022/01/04/cramer-okta-versus-deere-is-the-best-way-to-understand-the-market.html' } }} >Link</Link>
      <StatusBar style="auto" />
    </View>
  );
}
