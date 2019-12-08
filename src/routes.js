import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Weather from './pages/Weather';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Weather,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#005d93',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
