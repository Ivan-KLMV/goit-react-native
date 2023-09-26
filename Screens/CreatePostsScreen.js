import React, { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';

import { CameraSvgComponent, TrashSvgComponent } from '../components/SVGs';
import MapPinSvgComponent from '../components/SVGs/MapPinSvgComponent';
import CameraScreen from './CameraScreen';
import { Image } from 'react-native';
import { ToastAndroid } from 'react-native';

const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [postTitle, setPostTitle] = useState('');
  const [postLocation, setPostLocation] = useState('');
  const [isFocusedInput, setFocusInput] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [cameraRef, setCameraRef] = useState(null);
  const [pathToFile, setPathToFile] = useState(null);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [permission, requestCameraPermission] = Camera.useCameraPermissions();
  const [permissionResponse, requestMediaPermission] =
    MediaLibrary.usePermissions();

  const focusHandler = (inputId) => {
    setFocusInput((prevFocusedInput) =>
      prevFocusedInput === inputId ? null : inputId
    );
  };

  const inputStyles = (inputId) => ({
    ...styles.textInput,
    borderBottomColor: isFocusedInput === inputId ? '#FF6C00' : '#E8E8E8',
  });

  useEffect(() => {
    setPathToFile(null);
    setPostTitle('');
    setPostLocation('');

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();

    console.log('Component mounted');
    requestCameraPermission();
    requestMediaPermission();

    return () => {
      console.log('Component will unmount');
      setPathToFile(null);
    };
  }, [isFocused]);

  const isPostAvaliable =
    pathToFile && postTitle && postLocation ? true : false;

  const dynamichButtonStyle = (className, activClassName) => {
    return StyleSheet.flatten([className, isPostAvaliable && activClassName]);
  };

  // function toggleCameraType() {
  //   setType((current) =>
  //     current === CameraType.back ? CameraType.front : CameraType.back
  //   );
  // }

  async function takePhoto() {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setPathToFile(uri);
    }
  }

  async function createPostHandler() {
    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);

    navigation.navigate('Публікації');

    console.log(postTitle);
    console.log(postLocation);
    console.log(pathToFile);
    console.log(location);
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <View>
            <View style={styles.photoHolder}>
              {!pathToFile ? (
                isFocused ? (
                  <Camera
                    style={styles.camera}
                    ref={setCameraRef}
                    type={type}
                    ratio="16:9"
                  >
                    <TouchableOpacity
                      activeOpacity={0.7}
                      // onPress={async () => {
                      //   if (cameraRef) {
                      //     const { uri } = await cameraRef.takePictureAsync();
                      //     setPathToFile(uri);
                      //   }
                      // }}
                      onPress={takePhoto}
                    >
                      <View style={styles.takePhotoIcon}>
                        <CameraSvgComponent />
                      </View>
                    </TouchableOpacity>
                  </Camera>
                ) : null
              ) : (
                <Image source={{ uri: pathToFile }} style={styles.postImage} />
              )}
            </View>
            <Text style={styles.photoHolderText}>Завантажте фото</Text>
          </View>
          <View>
            <TextInput
              placeholder="Назва..."
              value={postTitle}
              onChangeText={setPostTitle}
              inputMode="text"
              placeholderTextColor="#BDBDBD"
              style={inputStyles(1)}
              onFocus={() => focusHandler(1)}
              onBlur={() => focusHandler(1)}
            />
            <View style={{ position: 'relative' }}>
              <MapPinSvgComponent style={styles.mapPin} />
              <TextInput
                placeholder="Місцевість..."
                value={postLocation}
                onChangeText={setPostLocation}
                inputMode="text"
                placeholderTextColor="#BDBDBD"
                style={{ ...inputStyles(2), paddingLeft: 30 }}
                onFocus={() => focusHandler(2)}
                onBlur={() => focusHandler(2)}
              />
            </View>
          </View>
          <TouchableOpacity
            disabled={!isPostAvaliable}
            activeOpacity={0.7}
            // onPress={async () => {
            //   let location = await Location.getCurrentPositionAsync({});
            //   setLocation(location);

            //   navigation.navigate('Публікації');
            // }}
            onPress={createPostHandler}
          >
            <View
              style={dynamichButtonStyle(
                styles.createPostButton,
                styles.activeCreatePostButton
              )}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: isPostAvaliable ? 'white' : '#BDBDBD',
                }}
              >
                Опубліковати
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={dynamichButtonStyle(
            styles.trashButton,
            styles.activeTrashButton
          )}
          disabled={!isPostAvaliable}
        >
          <TrashSvgComponent
            style={styles.svg}
            color={isPostAvaliable ? 'white' : '#BDBDBD'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  svg: { fill: 'red' },
  container: {
    flex: 1,
    backgroundColor: 'white',
    // backgroundColor: 'hotpink',
    paddingTop: 32,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
  },

  innerContainer: {
    flex: 1,
    // backgroundColor: 'green',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  trashButton: {
    width: 70,
    height: 40,
    backgroundColor: '#F6F6F6',
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeTrashButton: {
    backgroundColor: '#FF6C00',
  },

  photoHolder: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 4 / 3,
    backgroundColor: '#F6F6F6',
    overflow: 'hidden',
    borderRadius: 4,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    marginBottom: 8,
  },

  camera: {
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 9 / 16,
    width: '100%',
    // height: '75%',
  },

  takePhotoIcon: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  postImage: {
    width: '100%',
    aspectRatio: 4 / 3,
    alignSelf: 'center',
  },

  photoHolderText: { fontSize: 16, color: '#BDBDBD', marginBottom: 48 },

  mapPin: { position: 'absolute', bottom: 35 },

  textInput: {
    fontSize: 16,
    paddingTop: 16,
    paddingBottom: 15,
    borderBottomWidth: 1,
    marginBottom: 16,
  },

  createPostButton: {
    marginTop: 27,
    borderRadius: 50,
    backgroundColor: '#F6F6F6',
    paddingBottom: 16,
    paddingTop: 16,
    alignItems: 'center',
  },

  activeCreatePostButton: {
    backgroundColor: '#FF6C00',
  },

  createPostButtonText: { color: '#BDBDBD', fontSize: 16 },
});
export default CreatePostsScreen;
