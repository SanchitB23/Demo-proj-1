import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {RootStackParamList, SCREEN_NAMES} from '../constants';
import SplashScreen from "../screens/SplashScreen";
import HomePage from "../screens/HomePage";
import RequestMoney from "../screens/RequestMoney";
import SearchRecipient from "../screens/SearchRecipient";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootRoutes = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name={SCREEN_NAMES.Splash} component={SplashScreen}/>
                    <Stack.Screen name={SCREEN_NAMES.Home} component={HomePage}/>
                    <Stack.Screen name={SCREEN_NAMES.Request} component={RequestMoney}/>
                    <Stack.Screen name={SCREEN_NAMES.Search} component={SearchRecipient}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
export default RootRoutes;
