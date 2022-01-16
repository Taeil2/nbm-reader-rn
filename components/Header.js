import { FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';

import styled from 'styled-components/native';

const categories = ['Technology', 'Business', 'News', 'Entertainment', 'Fitness', 'Health', 'Culture', 'Style'];

export default function Header(props) {
  console.log('header props', props);
  
  return (
    <StyledView>
      <Logo><LogoName>NBM</LogoName></Logo>
      <StyledList
        data={categories}
        horizontal={true}
        renderItem={({item, index, separators}) => (
          <StyledButton key={index}><Text>{item}</Text></StyledButton>
        )}
      />
    </StyledView>
  );
}

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  height: 100px;
  padding-top: 45px;
`;

const Logo = styled.View`
  background: #bbb;
  padding: 0 15px;
  justify-content: center;
`

const LogoName = styled.Text`
  font-size: 24px;
`


const StyledList = styled.FlatList`
  
`

const StyledButton = styled.TouchableOpacity`
  background: #eee;
  height: 100%;
  justify-content: center;
  padding: 0 10px;
`