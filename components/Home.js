import { Button, ScrollView, Text, View } from 'react-native';

export function HomeScreen({ navigation, route }) {
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details without params"
                    onPress={() => navigation.navigate('Details')}
                />
                <Button
                    title="Go to Details with params"
                    onPress={() => navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })}
                />
                <Button
                    title="Create post"
                    onPress={() => navigation.navigate('CreatePost')}
                />
                <Button
                    title="Webview Example"
                    onPress={() => navigation.navigate('Webview')}
                />
                <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
            </View>
        </ScrollView>
    );
}