import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator} = createNativeStackNavigator()

import { Team } from '../screens/Team'
import { Home } from "../screens/Home";

export function StackRoutes(){
  return (
    <Navigator>
        <Screen 
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />

        <Screen 
          name="Team"
          component={Team}
          options={{headerShown: false}}
        />
    </Navigator>
  )
}