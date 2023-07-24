import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PostScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';
import LogOutButton from '../components/LogOutButton';
import GridSvgComponent from '../components/GridSvgComponent';
import UserSvgComponent from '../components/UserSvgComponent';
import NewPostSvgComponent from '../components/NewPostSvgComponent';
import ArrowLeftSvgComponent from '../components/ArrowLeftSvgComponent';

const Tab = createBottomTabNavigator();

const HomePage = (props) => {
  const { loginHandler } = props.route.params;

  return (
    <Tab.Navigator
      initialRouteName="PostScreen"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 60 },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 17,
        },
        headerStyle: {
          borderBottomWidth: 1,
        },
      }}
    >
      <Tab.Screen
        name="Публікації"
        component={PostScreen}
        options={{
          tabBarIcon: () => <GridSvgComponent />,
          headerRight: () => <LogOutButton myProp={loginHandler} />,
        }}
      />
      <Tab.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: () => <NewPostSvgComponent />,
          tabBarStyle: { display: 'none' },
          headerLeft: () => <ArrowLeftSvgComponent />,
        }}
      />
      <Tab.Screen
        name="Профіль"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <UserSvgComponent />,
          tabBarStyle: { display: 'none' },
          headerLeft: () => <ArrowLeftSvgComponent />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomePage;
