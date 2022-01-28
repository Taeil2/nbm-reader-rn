import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

const categories = ['technology', 'business', 'news', 'entertainment', 'fitness', 'health', 'culture', 'style'];

export default function ReadHeader(props) {
  const { setActiveNav } = props;

  return (
    <StyledView>
      <Logo><LogoName>NBM</LogoName></Logo>
      <StyledList
        data={categories}
        horizontal={true}
        renderItem={({item, index, separators}) => (
          <StyledButton key={index} onPress={() => setActiveNav(item)} >
            <Text>{item.charAt(0).toUpperCase() + item.slice(1)}</Text>
          </StyledButton>
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