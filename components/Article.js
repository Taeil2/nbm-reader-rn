import { View, TouchableOpacity, Text } from 'react-native'

import ContextMenu from './ContextMenu';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components/native';
import { useState } from 'react';

export default function Article() {
  const [ showMenu, setShowMenu ] = useState(false);

  return <StyledArticle>
    <ImagePlaceholder />
    <Content>
      <Text>CNBC</Text>
      <Text>Headline Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
      <Text>16 hours ago • Author Name</Text>
    </Content>
    <MenuButton onPress={() => setShowMenu(true)}><FontAwesomeIcon icon={faEllipsisV} /></MenuButton>
    {showMenu && <ContextMenu />}
  </StyledArticle>
};

const StyledArticle = styled.View`
  padding: 15px;
  padding-right: 5px;
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  position: relative;
`;

const ImagePlaceholder = styled.View`
  background: #ccc;
  width: 80px;
  height: 80px;
  margin-right: 15px;
`;

const Content = styled.View`
  display: flex;
  flex: 1;
`;

const MenuButton = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  margin-top: -6px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
