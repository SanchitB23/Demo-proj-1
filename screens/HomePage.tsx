import React from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {Avatar, Box, Button, HStack, Icon, Image, ScrollView, StatusBar, Text, VStack} from "native-base";
import {AntDesign, Entypo} from '@expo/vector-icons';
import faker from "@faker-js/faker";
import {RootStackParamList, SCREEN_NAMES} from "../constants";
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, SCREEN_NAMES.Home>

const HomeScreen: React.FC<Props> = ({navigation}) => {
    const DATA = [
        {
            index: 0,
            name: "Adeboye Usman",
            color: "#1DC7AC",
            icon: "adduser",
            iconType: AntDesign,
            text: "Received",
            amount: "200,000",
            currencyIcon: require("../assets/icons/currency-blue.png")
        },
        {
            index: 1,
            name: "Mercy Popoola",
            color: "#FE4A54",
            icon: "exclamationcircleo",
            iconType: AntDesign,
            text: "Received",
            amount: "110,000",
            currencyIcon: require("../assets/icons/currency-red.png")
        },

        {
            index: 2,
            name: "Onome Adetayo",
            color: "#FAAD39",
            icon: "adduser",
            iconType: AntDesign,
            text: "Received",
            amount: "10,000",
            currencyIcon: require("../assets/icons/currency-yellow.png")
        },

        {
            index: 3,
            name: "Kingsley Abiodun",
            color: "#1DC7AC",
            icon: "adduser",
            iconType: AntDesign,
            text: "Received",
            amount: "200,000",
            currencyIcon: require("../assets/icons/currency-blue.png")
        },
    ]


    const ActionSheetItems = (props: typeof DATA[0]) => {
        return (
            // <Actionsheet.Item bg={props.index % 2 ? "#10194E" : "#192259"}>
            <HStack justifyContent={"space-between"} alignItems={"center"} p={4}
                    bg={props.index % 2 ? "#10194E" : "#192259"}>
                <HStack justifyContent={"space-between"} space={4} alignItems={"center"}>
                    <Avatar source={{uri: randomImg}} size={12}/>
                    <VStack space={1} alignItems={"flex-start"}>
                        <Text color={"#858EC5"} fontWeight={"700"} fontSize={16} lineHeight={24}
                              fontFamily={"Inter"}>{props.name}</Text>
                        <HStack alignItems={"center"} bg={props.color} pt={1} pb={1} pr={2} pl={2}
                                borderRadius={100}>
                            <Icon as={props.iconType} name={props.icon} size={3} color={props.color} bg={"white"}
                                  borderRadius={100}/>
                            <Text color={"white"} fontWeight={"400"} fontSize={12} lineHeight={18}
                                  fontFamily={"Inter"}>{props.text}</Text>
                        </HStack>
                    </VStack>
                </HStack>
                <HStack alignItems={"center"} space={"2xs"}>
                    <Image source={props.currencyIcon} size={3}
                           alt="currency"/>
                    <Text color={props.color} fontWeight={"700"} fontSize={16} lineHeight={24}
                          fontFamily={"Inter"}>{props.amount}</Text>
                </HStack>
            </HStack>
            // </Actionsheet.Item>
        )
    }

    const randomImg = faker.image.avatar()
    return (
        <SafeAreaView style={{flex: 1}}>
            <Box flex={1} bg={"#010A43"}>
                <VStack flex={1} pl={4} pt={6} pr={4}>
                    <HStack justifyContent={"space-between"} alignItems={"center"}>
                        <HStack alignItems={"center"} space={4}>
                            <Image source={require("../assets/icons/hamburger.png")} size={12} borderRadius={100}
                                   alt="menu"/>
                            <Text color={"white"} fontWeight={"500"} fontSize={20} lineHeight={20} fontFamily={"Inter"}>Hello
                                Sandra,</Text>
                        </HStack>
                        <Button bg={"#212A6B"} _text={{
                            color: "#426DDC",
                            fontWeight: "500",
                            fontSize: 14,
                            lineHeight: 24,
                            fontFamily: "Inter"
                        }}>Add money</Button>
                    </HStack>
                    <Text color={"white"} fontWeight={"400"} fontSize={12} lineHeight={12} fontFamily={"Inter"} pt={12}
                          pb={4}>Your current balance is</Text>
                    <HStack alignItems={"center"} space={2}>
                        <Image source={require("../assets/icons/currency.png")} size={8}
                               alt="currency"/>
                        <Text color={"white"} fontWeight={"700"} fontSize={40} lineHeight={48}
                              fontFamily={"Inter"}>200,000</Text>
                    </HStack>
                    <HStack pt={12} space={"2xl"} justifyContent={"space-around"}>
                        <Button variant={"outline"} borderColor={"#464E8A"} w={"50%"} pt={4} pb={4} borderRadius={10}
                                onPress={() => navigation.navigate(SCREEN_NAMES.Request)}
                                _text={{
                                    color: "#464E8A",
                                    fontWeight: "500",
                                    fontSize: 16,
                                    lineHeight: 28,
                                    fontFamily: "Inter"
                                }}>Request money</Button>
                        <Button variant={"outline"} borderColor={"#464E8A"} w={"50%"} pt={4} pb={4} borderRadius={10}
                                onPress={() => navigation.navigate(SCREEN_NAMES.Search)}
                                _text={{
                                    color: "#464E8A",
                                    fontWeight: "500",
                                    fontSize: 16,
                                    lineHeight: 28,
                                    fontFamily: "Inter"
                                }}>Send money</Button>
                    </HStack>
                </VStack>
                <VStack bg={"#10194E"} pt={4} borderTopRadius={20} flex={1}>
                    <Box bg={"#4E589F"} h={2} w={16} rounded={"xl"} alignSelf={"center"}/>
                    <HStack space={20} pb={8} pl={4} pr={4} justifyContent={"space-between"}>
                        <Text color={"white"} fontWeight={"500"} fontSize={16} lineHeight={24}
                              fontFamily={"Inter"}>All Transactions</Text>
                        <HStack>
                            <Text color={"#4E589F"} fontWeight={"400"} fontSize={14} lineHeight={24}
                                  fontFamily={"Inter"}>Sort by:</Text>
                            <Text color={"#DDD9D9"} fontWeight={"400"} fontSize={14} lineHeight={24}
                                  fontFamily={"Inter"} pl={2}>Recent</Text>
                            <Entypo name="chevron-small-down" size={24} color="#DDD9D9"/>
                        </HStack>
                    </HStack>
                    <ScrollView>
                        {DATA.map((data) => <ActionSheetItems {...data} key={data.index}/>)}
                    </ScrollView>
                </VStack>
                <StatusBar hidden={false} backgroundColor={"#010A43"}/>
            </Box>
        </SafeAreaView>
    )
}
export default HomeScreen;
