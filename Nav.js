import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './screens/homescreen';
import VideoScreen from './screens/videoscreen';
import CourseScreen from './screens/coursescreen'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Video: VideoScreen
})
HomeStack.navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: ({focused})=> <Ionicons name="ios-home" size={25} color={focused? "#4f81c7" : "#d4d7dd"} />
}

const CourseStack = createStackNavigator({
    Courses: CourseScreen
})
CourseStack.navigationOptions = {
    tabBarLabel: "Course",
    tabBarIcon: ({focused})=> <Ionicons name="ios-albums" size={25} color={focused? "#4f81c7" : "#d4d7dd"} />
}

const VideoStack = createStackNavigator({
    Courses: CourseScreen
})
VideoStack.navigationOptions = {
    tabBarLabel: "Video",
    tabBarIcon: ({focused})=> <Ionicons name="ios-videocam" size={25} color={focused? "#4f81c7" : "#d4d7dd"} />
}


const BottomTab = createBottomTabNavigator({HomeStack, CourseStack, VideoStack}, {tabBarOptions:{showLabel: false}})

export default createAppContainer(BottomTab)
