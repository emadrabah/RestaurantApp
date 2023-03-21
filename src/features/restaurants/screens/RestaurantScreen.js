import React, { useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import styled from "styled-components";
import { View, FlatList, Dimensions } from "react-native";
import { SafeArea } from "../../../components/utility/SafeAreaComponent";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantsContext";
import { ActivityIndicator, Colors } from "react-native-paper";

import { Search } from "../components/SearchComponent";
import { RestaurantInfoCard } from "../components/RestaurantInfoCardComponent";

const SearchView = styled(View)`
  flex: 0.05;
  padding: ${(props) => props.theme.space[3]};
  width: ${Dimensions.get("window").width}px;
  justify-content: center;
`;
const BodyView = styled(View)`
  flex: 0.95;
  padding: ${(props) => props.theme.space[2]};
  width: ${Dimensions.get("window").width}px;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})``;

const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} color="tomato" />
          </LoadingContainer>
        )}
        <Search />
        <BodyView>
          <RestaurantList
            data={restaurants}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: 5 }}
            renderItem={({ item }) => {
              return <RestaurantInfoCard restaurant={item} />;
            }}
          />
        </BodyView>
        <ExpoStatusBar style="auto" />
      </SafeArea>
    </>
  );
};
export default RestaurantScreen;
