import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PostScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import LogoutButton from '../components/LogoutButton';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const HomePage = (props) => {
  const { loginHandler } = props.route.params;

  return (
    <Tab.Navigator
      initialRouteName="PostScreen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 17,
        },
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0, 0, 0, 0.30)',
        },
      }}
    >
      <Tab.Screen
        name="Публікації"
        component={PostScreen}
        options={{
          headerRight: () => <LogoutButton myProp={loginHandler} />,
        }}
      />
      <Tab.Screen name="Створити публікацію" component={CreatePostsScreen} />
      <Tab.Screen name="Профіль" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomePage;
