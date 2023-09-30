import React, { useEffect, useState } from 'react';
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import StartScreenBackground from '../components/StartScreenBackground';
import { AddSvgComponent } from '../components/SVGs';
import PostCard from '../components/PostCard';
import LogOutButton from '../components/LogOutButton';

const ProfileScreen = (props) => {
  useEffect(() => {
    console.log('ProfileScreen mounted');

    return () => {
      console.log('ProfileScreen will unmount');
      // Виконати дії перед демонтажем HomePage
    };
  }, []);

  return (
    <StartScreenBackground>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.inner}>
            <View style={styles.avatarBox}>
              <View
                style={{
                  overflow: 'hidden',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 120,
                  height: 120,
                  borderRadius: 16,
                }}
              >
                <Image
                  source={require('../img/userPhoto.jpg')}
                  resizeMode="contain"
                  style={{ width: 140 }}
                />
              </View>
              <AddSvgComponent
                fill="#E8E8E8"
                style={{
                  position: 'absolute',
                  right: -13,
                  top: 75,
                  transform: [{ rotate: '45deg' }],
                }}
              />
            </View>
            <Text style={styles.header}>Natali Romanova</Text>
            <View style={{ position: 'absolute', right: 6, top: 12 }}>
              <LogOutButton />
            </View>

            <PostCard />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </StartScreenBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 147,
  },
  inner: {
    position: 'relative',
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 500,
    marginTop: 92,
    marginBottom: 33,
  },
  avatarBox: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    left: '50%',
    top: 0,
    marginLeft: -50,
    marginTop: -60,
  },
});

export default ProfileScreen;
