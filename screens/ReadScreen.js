import { StatusBar } from 'expo-status-bar';

import Article from './../components/Article';
import { View, TouchableOpacity } from 'react-native';
import ReadHeader from '../components/ReadHeader';
import { useState, useEffect } from 'react';

let articles;

export default function ReadScreen(props) {
  const { navigation } = props;
  const [ activeNav, setActiveNav ] = useState();

  const openUrl = (url) => {
    navigation.navigate(
      'Article',
      { url: url }
    );
  }

  useEffect(() => {
    articles = <>
    <TouchableOpacity onPress={() => openUrl('https://www.cnbc.com/2022/01/04/cramer-okta-versus-deere-is-the-best-way-to-understand-the-market.html')} >
        <Article />
      </TouchableOpacity>
      <Article key={1} />
      <Article key={2} />
    </>
  }, [activeNav]);

  return (
    <View>
      <ReadHeader setActiveNav={setActiveNav} />
      {articles}
      <StatusBar style="auto" />
    </View>
  );
}
