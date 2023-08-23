import { Text } from 'react-native';
import { View } from 'react-native';

const CustomHeader = ({ title }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 500,
          paddingBottom: 11,
          textAlign: 'end',
        }}
      >
        {title}
      </Text>
    </View>
  );
};

// export default CustomHeader;
