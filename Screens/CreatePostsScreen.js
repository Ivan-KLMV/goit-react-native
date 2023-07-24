import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import CameraSvgComponent from '../components/CameraSvgComponent';
import TrashSvgComponent from '../components/TrashSvgComponent';

const CreatePostsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        // backgroundColor: 'hotpink',
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
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                aspectRatio: 4 / 3,
                backgroundColor: '#F6F6F6',
                borderRadius: 4,
                borderColor: '#E8E8E8',
                borderWidth: 1,
                marginBottom: 8,
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
            <TextInput
              placeholder="Місцевість..."
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
