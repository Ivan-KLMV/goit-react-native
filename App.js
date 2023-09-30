import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';

import { AppNavigation } from './src/AppNavigation';
import { Text } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>..Loading</Text>} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
}
