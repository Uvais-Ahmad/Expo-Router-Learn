import { StyleSheet, Text, Touchable, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Tabs, useRouter } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ProfileLayout = () => {
    const route = useRouter();
    return (
        <Tabs>
            <Tabs.Screen 
                name='index' 
                options={{
                    headerTitle: 'Profile',
                    headerTitleAlign: 'center',
                    tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="home" color={color} size={size} />,
                    headerLeft: ( ) => (
                        <TouchableOpacity onPress={() => route.back()} style={{borderWidth: 1/2, borderRadius: 10, borderColor: 'lightgrey',margin: 10, padding: 5, paddingHorizontal: 20}}>
                            <Text>Back</Text>
                        </TouchableOpacity>
                    )
                }}
            />

            <Tabs.Screen 
                name='orders' 
                options={{
                    headerTitle: 'Orders',
                    headerTitleAlign: 'center',
                    tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="cart" color={color} size={size} />,
                    headerLeft: ( ) => (
                        <TouchableOpacity onPress={() => route.back()} style={{borderWidth: 1/2, borderRadius: 10, borderColor: 'lightgrey',margin: 10, padding: 5, paddingHorizontal: 20}}>
                            <Text>Back</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </Tabs>
    )
}

export default ProfileLayout

const styles = StyleSheet.create({})