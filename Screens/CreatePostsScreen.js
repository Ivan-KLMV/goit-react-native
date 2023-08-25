import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

import { CameraSvgComponent, TrashSvgComponent } from '../components/SVGs';
import MapPinSvgComponent from '../components/SVGs/MapPinSvgComponent';
import CameraScreen from './CameraScreen';
import { Image } from 'react-native';

const CreatePostsScreen = () => {
  const [type, setType] = useState(CameraType.back);
  const [cameraRef, setCameraRef] = useState(null);
  const [pathToFile, setPathToFile] = useState(null);

  const [permission, requestCameraPermission] = Camera.useCameraPermissions();
  const [permissionResponse, requestMediaPermission] =
    MediaLibrary.usePermissions();

  useEffect(() => {
    console.log('Component mounted');
    requestCameraPermission();
    requestMediaPermission();

    return () => {
      console.log('Component will unmount');
      // Виконати дії перед демонтажем компоненту
    };
  }, []);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  async function takePhoto() {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      console.log('uri', uri);
      // const path = await MediaLibrary.createAssetAsync(uri);
      // console.log(path.uri);
      setPathToFile(uri);
      console.log('pathToFile', pathToFile);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'white',
        backgroundColor: 'hotpink',
        paddingTop: 32,
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <View
        style={{
          flex: 1,
          // backgroundColor: 'white',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <View>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                aspectRatio: 4 / 3,
                // backgroundColor: '#F6F6F6',
                backgroundColor: 'red',
                overflow: 'hidden',
                borderRadius: 4,
                borderColor: '#E8E8E8',
                borderWidth: 1,
                marginBottom: 8,
              }}
            >
              {!pathToFile ? (
                <Camera
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    aspectRatio: 9 / 16,
                    width: '100%',
                    // height: '75%',
                  }}
                  ref={setCameraRef}
                  type={type}
                  ratio="16:9"
                >
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={async () => {
                      if (cameraRef) {
                        const { uri } = await cameraRef.takePictureAsync();
                        console.log('uri', uri);
                        // const path = await MediaLibrary.createAssetAsync(uri);
                        // console.log(path.uri);
                        setPathToFile(uri);
                        console.log('pathToFile', pathToFile);
                      }
                    }}
                  >
                    <View
                      style={{
                        width: 60,
                        height: 60,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 50,
                      }}
                    >
                      <CameraSvgComponent />
                    </View>
                  </TouchableOpacity>
                </Camera>
              ) : (
                <Image
                  source={{ uri: pathToFile }}
                  style={{
                    width: '100%',
                    aspectRatio: 4 / 3,
                    alignSelf: 'center',
                  }}
                />
              )}
            </View>
            <Text style={{ fontSize: 16, color: '#BDBDBD', marginBottom: 48 }}>
              Завантажте фото
            </Text>
          </View>
          <View>
            <TextInput
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
              style={{
                fontSize: 16,
                paddingTop: 16,
                paddingBottom: 15,
                borderBottomWidth: 1,
                borderBottomColor: '#E8E8E8',
                marginBottom: 16,
              }}
            />
            <View style={{ position: 'relative' }}>
              <MapPinSvgComponent
                style={{ position: 'absolute', bottom: 35 }}
              />
              <TextInput
                placeholder="Місцевість..."
                placeholderTextColor="#BDBDBD"
                style={{
                  fontSize: 16,
                  paddingTop: 16,
                  paddingBottom: 15,
                  paddingLeft: 30,
                  borderBottomWidth: 1,
                  borderBottomColor: '#E8E8E8',
                  marginBottom: 16,
                }}
              />
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <View
              style={{
                marginTop: 27,
                borderRadius: 50,
                backgroundColor: '#F6F6F6',
                paddingBottom: 16,
                paddingTop: 16,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#BDBDBD', fontSize: 16 }}>
                Опубліковати
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 70,
            height: 40,
            backgroundColor: '#F6F6F6',
            alignSelf: 'center',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TrashSvgComponent />
        </View>
      </View>
    </View>
  );
};

export default CreatePostsScreen;
