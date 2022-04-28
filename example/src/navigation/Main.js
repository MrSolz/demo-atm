import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIconStyle: { display: 'none' },
                    tabBarLabelPosition: 'beside-icon',
                }}
            />
        </Tab.Navigator>
    )
}

export default MainNavigator