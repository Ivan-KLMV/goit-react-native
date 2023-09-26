import { StyleSheet } from 'react-native';
import { View } from 'react-native';

const CommentsScreen = () => {
  return <View style={styles.container}></View>;
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

export default CommentsScreen;
