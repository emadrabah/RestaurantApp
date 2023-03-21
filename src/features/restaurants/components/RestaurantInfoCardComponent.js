import React from "react";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Spacer } from "../../../components/spacer/SpacerComponent";
import { Text } from "../../../components/typography/TextComponent";
import {
  RestaurantCard,
  RestaurantCardCover,
  Title,
  Info,
  Address,
  RatingView,
  RatingAndOpenView,
  ClosedText,
  RestaurantStateView,
} from "./RestaurantInfoCardStyles";

const RestaurantInfoCardComponent = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg",
    ],
    address = "100 Random Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <RatingAndOpenView>
          <RatingView>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </RatingView>
          <RestaurantStateView>
            {isOpenNow && <SvgXml xml={open} width={22} height={22} />}
            {isClosedTemporarily && (
              <>
                <Icon name="close" color={"red"} size={20} />
                <Text variant="error">CLOSED!</Text>
              </>
            )}
          </RestaurantStateView>
        </RatingAndOpenView>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCardComponent;
