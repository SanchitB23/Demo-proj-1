import {NativeBaseProvider} from 'native-base';
import React from 'react';
import RootRoutes from "./routes";
import {useFonts} from "expo-font";

export default function App() {
    const [loaded] = useFonts({
        Inter: require('./assets/fonts/Inter.ttf'),
    })
    if (!loaded) return null

    return (
        <NativeBaseProvider>
            <RootRoutes/>
        </NativeBaseProvider>
    );
}
