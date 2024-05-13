// In App.js in a new project
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreatePostScreen } from './components/CreatePost';
import { HomeScreen } from './components/Home';
import { DetailsScreen } from './components/Details';
import { Test } from './components/Test';
import { WebviewScreen } from './components/WebviewTest';
import 'react-native-reanimated';

const Stack = createNativeStackNavigator();
  
function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Webview" component={WebviewScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} initialParams={{ itemId: 42 }} />
          <Stack.Screen name="CreatePost" component={CreatePostScreen} />
          <Stack.Screen name="Test" component={Test} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;