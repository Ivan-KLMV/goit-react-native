const { Image, TouchableOpacity, View } = require('react-native');

const LogoutButton = ({ myProp }) => {
  console.log('LogoutButton', myProp);
  return (
    <View>
      <TouchableOpacity
        style={{
          // backgroundColor: 'red',
          width: 42,
          height: 42,
          borderBottomLeftRadius: 4,
          borderTopLeftRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => myProp(false)}
      >
        <View>
          <Image
            source={require('../img/log-out.png')}
            style={{ width: 24, height: 24 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LogoutButton;
