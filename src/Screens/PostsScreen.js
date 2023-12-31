import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';

const PostScreen = () => {
  useEffect(() => {
    console.log('PostScreen mounted');

    return () => {
      console.log('PostScreen will unmount');
      // Виконати дії перед демонтажем HomePage
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <StatusBar style="auto" />
      <View style={{ paddingTop: 32, paddingLeft: 16, paddingRight: 16 }}>
        <View style={styles.userCard}>
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 16,
              backgroundColor: 'green',
            }}
          >
            <View
              style={{
                width: 60,
                height: 60,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 16,
              }}
            >
              <Image
                source={require('../img/userPhoto.jpg')}
                resizeMode="contain"
                style={{ width: 70 }}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'column', marginLeft: 8 }}>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
  },

  userName: {
    fontSize: 13,
    fontWeight: 700,
    color: '#212121',
  },
  userEmail: {
    fontSize: 11,
    fontWeight: 400,
    color: 'rgba(33, 33, 33, 0.8) ',
  },
});
