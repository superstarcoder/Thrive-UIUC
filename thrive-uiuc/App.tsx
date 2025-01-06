import { StatusBar } from "expo-status-bar";
import React, { useState, FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "./styles/Color";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthPage from "./components/AuthPage/AuthPage";
import HomePage from "./components/HomePage/HomePage";

export type Props = {};

export type PageName = "auth-page" | "create-profile-page"

const Stack = createStackNavigator();

const App: FC<Props> = () => {
    const [currentPage, setCurrentPage] = useState<PageName>("auth-page");

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="auth-page" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="auth-page" component={AuthPage}/>
                <Stack.Screen name="home-page" component={HomePage}/>
                {/* <View style={styles.container}>
                    {currentPage == "auth-page" && <AuthPage />}
                </View> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {},
});