import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {Box, Button, HStack, Text, VStack} from "native-base";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList, SCREEN_NAMES} from "../constants";
import {StatusBar} from 'expo-status-bar';

type Props = NativeStackScreenProps<RootStackParamList, SCREEN_NAMES.Splash>

const SplashScreen: React.FC<Props> = ({navigation}) => {
    return (
        <ImageBackground source={require("../assets/splashbg.png")} style={styles.imageBg}>
            <StatusBar hidden={false} style="light"/>
            <VStack bg={"#17288E"} w={"xs"} h={"3xs"} style={styles.container} pl={8} pt={8}>
                <HStack space={1}>
                    <Box bg={"#FDD590"} h={2} w={4} rounded={"xl"}/>
                    <Box bg={"#FFB129"} h={2} w={8} rounded={"xl"}/>
                    <Box bg={"#FDD590"} h={2} w={4} rounded={"xl"}/>
                </HStack>
                <VStack space={3} pt={3}>
                    <Text style={styles.heading}>Transfer That Is Safe</Text>
                    <Text style={styles.text} maxW={240}>You have nothing to be scared about, we got you covered.</Text>
                </VStack>
                <Button maxW={145} bg={"white"} _text={styles.buttonText} mt={3.5}
                        onPress={() => navigation.navigate(SCREEN_NAMES.Home)}>Start banking</Button>
            </VStack>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        borderTopRightRadius: 70
    },
    imageBg: {
        flex: 1,
        height: "100%"
    },
    heading: {
        color: "white",
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 30,
        fontFamily: "Inter"
    },
    text: {
        color: "white",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "Inter"
    },
    buttonText: {
        color: "#17288E",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 30,
        fontFamily: "Inter"
    }
});
export default SplashScreen;
