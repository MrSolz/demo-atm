import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
// import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { navigationRef } from './utils'
import { LoginScreen, setObj } from 'demo-authen-me';

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
    useEffect(() => {
        setObj({ API_URL: "https://baogam.order.gobizdev.com/" })
    }, [])
    // const { colors } = NavigationTheme

    return (
        <NavigationContainer ref={navigationRef}>
            {/* <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} /> */}
            <StatusBar barStyle={'light-content'} />

            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Startup"  >
                    {(props) => <LoginScreen {...props} otherProp={{ params: { nextScreen: "Main" } }} />}
                </Stack.Screen>
                <Stack.Screen
                    name="Main"
                    component={MainNavigator}
                    options={{
                        animationEnabled: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ApplicationNavigator