import { FlatList, Text, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

const menuItems = [
  'Save', 'Unfollow', 'Share'
];

const ContextMenu = () => {
  const renderItem = ({item}) => (
    <MenuItem><StyledText>{item}</StyledText></MenuItem>
  );

  return <Menu data={menuItems} renderItem={renderItem} />
};

const Menu = styled.FlatList`
  position: absolute;
  right: 10px;
  top: 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  z-index: 1;
  padding: 5px 0;
`;

const MenuItem = styled.TouchableOpacity`
  padding: 5px 10px;
`;

const StyledText = styled.Text`
  color: #333;
  text-align: center;
`;

export default ContextMenu;