import { Image, StyleSheet, Text, View } from 'react-native';
import ComentMessageSvgComponent from './SVGs/ComentMessageSvgComponent';
import ThumbsUpSvgComponent from './SVGs/ThumbsUpSvgComponent';
import MapPinSvgComponent from './SVGs/MapPinSvgComponent';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const PostCard = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 240,
      }}
    >
      <Image
        source={require('../img/forest.jpeg')}
        resizeMode="contain"
        style={{ width: '100%', maxHeight: 240, borderRadius: 8 }}
      />
      <Text
        style={{ marginTop: 8, marginBottom: 8, fontSize: 16, fontWeight: 500 }}
      >
        Ліс
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', gap: 24 }}>
          <View style={{ flexDirection: 'row' }}>
            <ComentMessageSvgComponent style={{ marginRight: 8 }} />
            <Text style={{ fontSize: 16, fontWeight: 400 }}>8</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <ThumbsUpSvgComponent style={{ marginRight: 8 }} />
            <Text style={{ fontSize: 16, fontWeight: 400 }}>153</Text>
          </View>
        </View>
        <Pressable
          onPress={() => {
            console.log(navigation.navigate('MapScreen'));
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <MapPinSvgComponent style={{ marginRight: 8 }} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                textDecorationLine: 'underline',
              }}
            >
              Ukraine
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default PostCard;
