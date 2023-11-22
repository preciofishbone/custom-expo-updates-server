import { StatusBar } from 'expo-status-bar';
import * as Updates from "expo-updates"
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Constants from 'expo-constants';

export default function App()
{
    let currentUpdate;
    async function onFetchUpdateAsync()
    {
        try
        {
            const update = await Updates.checkForUpdateAsync();
            alert(`update: ${JSON.stringify(update)}`);
            if (update.isAvailable)
            {
                await Updates.fetchUpdateAsync();
                await Updates.reloadAsync();
            }
        }
        catch (error)
        {
            // You can also add an alert() to see the error message in case of an error when fetching updates.
            alert(`Error fetching latest Expo update: ${error}`);
        }
    }


    return (
        <View style={styles.container}>
            <View style={{ flex: 4, alignItems: 'center', alignContent: "center", justifyContent: "center" }}>
                <Text>Update From Feed Next - Open up App.js to start working on your app!</Text>
                <Text>{Constants.expoConfig.name}</Text>

                <Image source={require('./assets/favicon.png')} />


                <Button title="Fetch update" onPress={onFetchUpdateAsync} />

                <StatusBar style="auto" />
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <Text>Version 7</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
