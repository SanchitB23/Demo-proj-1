import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar, Box, Button, Circle, HStack, Icon, Image, Pressable, Text, VStack} from "native-base";
import {Ionicons} from '@expo/vector-icons';
import faker from "@faker-js/faker";
import {RootStackParamList, SCREEN_NAMES} from "../constants";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, SCREEN_NAMES.Request>

const RequestMoneyPage: React.FC<Props> = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <VStack flex={1} bg={"#010A43"} justifyContent={"space-between"}>
                <HStack alignItems={"center"}>
                    <Pressable flex={1} pl={1} onPress={() => navigation.goBack()}>
                        <HStack alignItems={"center"} space={2} flex={1}>
                            <Icon as={Ionicons} name="ios-chevron-back-outline" size={6} color={"#D7C9C9"}/>
                            <Text color={"white"} fontWeight={"400"} fontSize={14} lineHeight={24}
                                  fontFamily={"Inter"}>Back</Text>
                        </HStack>
                    </Pressable>
                    <Text color={"white"} fontWeight={"500"} fontSize={18} lineHeight={26}
                          fontFamily={"Inter"}>New Request</Text>
                    <Box flex={1}/>
                </HStack>
                <VStack alignItems={"center"} space={"lg"}>
                    <Circle size="200px" bg={"#10194E"} borderRadius={100}>
                        <Circle size="150px" bg={"#192259"} borderRadius={100}>
                            <Avatar source={{uri: faker.image.avatar()}} size="100px"/>
                        </Circle>
                    </Circle>
                    <Text color={"#eee"} fontWeight={"500"} fontSize={24} lineHeight={32}
                          fontFamily={"Inter"}>{faker.name.firstName()} {faker.name.lastName()}</Text>
                    <Text color={"#eee"} fontWeight={"400"} fontSize={14} lineHeight={21}
                          fontFamily={"Inter"}>is requesting for:</Text>
                    <HStack alignItems={"center"} space={"xs"}>
                        <Image source={require("../assets/icons/currency.png")} size={8}
                               alt="currency"/>
                        <Text color={"#eee"} fontWeight={"700"} fontSize={40} lineHeight={48}
                              fontFamily={"Inter"}>{faker.commerce.price(100, 300000, 0)}</Text>
                    </HStack>
                </VStack>
                <VStack alignItems={"center"} space={"md"} pb={16}>
                    <Button bg={"#FF2E63"} w={40} h={16}>Send money</Button>
                    <Button variant={"outline"} w={40} h={16} colorScheme={"muted"}>Don't send</Button>
                </VStack>
            </VStack>
        </SafeAreaView>
    );
}
export default RequestMoneyPage;
