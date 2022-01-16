import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function SettingsScreen() {
    return (
      <View>
        <Text>Settings</Text>
        <StatusBar style="auto" />
      </View>
    );
}
