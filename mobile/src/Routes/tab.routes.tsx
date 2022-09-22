import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const { Screen, Navigator} = createBottomTabNavigator()

import { Home } from "../screens/Home";
import { TabIcon } from "../components/TabIcon";
import { Stadiums } from "../screens/Stadiums";
import { Qatar } from "../screens/Qatar";
import { Coca } from "../screens/Coca";
import { Museum } from "../screens/Museum";
import { StackRoutes } from "./stack.routes";


export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: 'nay',
        tabBarInactiveTintColor: 'red',
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 25,
          height: 70,
          shadowColor: '#7F5DF0',
          shadowOffset: {
            width: 0,
            height: 10
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5
        },
        tabBarShowLabel: false
      }}
    >
        <Screen 
          name="Groups"
          component={StackRoutes}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon 
                label="Grupos"
                image={require('../assets/icons/soccer-player.png')}
                focused={focused}
              />
            )
          }}
        />

        <Screen 
          name="Stadiums"
          component={Stadiums}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon 
                label="Estádios"
                image={require('../assets/icons/stadium.png')}
                focused={focused}
              />
            )
          }}
        />

        <Screen 
          name="Qatar"
          component={Qatar}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon 
                label="Catar"
                image={require('../assets/logoCopa.png')}
                focused={focused}
              />
            )
          }}
        />

        <Screen 
          name="Coca"
          component={Coca}
          options={{
            headerShown: false,
            tabBarLabel: 'Coca',
            tabBarIcon: ({focused}) => (
              <TabIcon 
                label="Coca"
                image={require('../assets/icons/cola.png')}
                focused={focused}
              />
            )
          }}
        />

        <Screen 
          name="Museum"
          component={Museum}
          options={{
            headerShown: false,
            tabBarLabel: 'Museu',
            tabBarIcon: ({focused}) => (
              <TabIcon 
                label="Museu"
                image={require('../assets/icons/barrier.png')}
                focused={focused}
              />
            )
          }}
        />
    </Navigator>
  );
}