import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';

const PostScreen = () => {
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
          />
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
