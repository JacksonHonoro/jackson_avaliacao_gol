import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Weather from './pages/Weather';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Weather,
      Main,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#084D6E',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
