import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ReadScreen from './screens/ReadScreen';
import ArticleScreen from './screens/ArticleScreen';
// import BrowseScreen from './screens/BrowseScreen';
import CollectionScreen from './screens/CollectionScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import SettingsScreen from './screens/SettingsScreen';
import Header from './components/Header';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { faCog, faThLarge } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Read"
        component={ReadScreen}
        options={( navigation ) => ({
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faReadme} color={color} size={30} style={{ marginBottom: -3 }} />,
          header: (props) => <Header {...props} />,
        })}
      />
      <Tab.Screen
        name="Collection"
        component={CollectionScreen}
        options={( navigation ) => ({
          title: 'Collection',
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faThLarge} color={color} size={30} style={{ marginBottom: -3 }} />,
        })}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={( navigation ) => ({
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faCog} color={color} size={30} style={{ marginBottom: -3 }} />,
        })}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Article"
          component={ArticleScreen}
        />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: 'Page not found' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
