import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator} = createNativeStackNavigator()

import { Home } from '../screens/Home'
import { Selecao } from '../screens/Selecao'

export function StackRoutes(){
  return (
    <Navigator>
        <Screen 
          name="grupos"
          component={Home}
          options={{headerShown: false}}
        />

        <Screen 
          name="selecao"
          component={Selecao}
          options={{headerShown: false}}
        />
    </Navigator>
  )
}