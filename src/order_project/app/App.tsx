import { useFonts} from 'expo-font';
import {StatusBar} from 'expo-status-bar';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Routes from './src/routes';

export default function App() {
  const [isFontLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if(!isFontLoaded) return null;

  return (
    <>
      <StatusBar style={'dark'} />
      <Routes />
    </>
  );
}
