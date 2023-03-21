/* eslint-disable react/self-closing-comp */
import React from "react";
import { Platform } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantScreen from "./src/features/restaurants/screens/RestaurantScreen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/utility/SafeAreaComponent";
import Ionic from "react-native-vector-icons/Ionicons";
import { RestaurantsContextProvider } from "./src/services/restaurants/RestaurantsContext";
import { LocationContextProvider } from "./src/services/location/LocationContext";

import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>map</Text>
  </SafeArea>
);

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const App = () => {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                initialRouteName="Restaurants"
                screenOptions={({ route }) => ({
                  tabBarActiveTintColor: "tomato",
                  tabBarInactiveTintColor: "grey",
                  tabBarShowLabel: false,
                  // eslint-disable-next-line react/no-unstable-nested-components
                  tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    if (route.name === "Restaurants") {
                      iconName = focused ? "restaurant" : "restaurant-outline";
                    } else if (route.name === "Map") {
                      iconName = focused ? "map" : "map-outline";
                    } else if (route.name === "Settings") {
                      iconName = focused ? "settings" : "settings-outline";
                    }
                    return <Ionic name={iconName} size={size} color={color} />;
                  },
                })}
              >
                <Tab.Screen
                  options={{ headerShown: false }}
                  name="Restaurants"
                  component={RestaurantScreen}
                ></Tab.Screen>
                <Tab.Screen
                  options={{ headerShown: false }}
                  name="Map"
                  component={Map}
                ></Tab.Screen>
                <Tab.Screen
                  options={{ headerShown: false }}
                  name="Settings"
                  component={Settings}
                ></Tab.Screen>
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
