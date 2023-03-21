import React from "react";
import { Dimensions, View } from "react-native";
import { Text } from "../../../components/typography/TextComponent";
import { Spacer } from "../../../components/spacer/SpacerComponent";
import { Card } from "react-native-paper";
import styled from "styled-components";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const RatingView = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RatingAndOpenView = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ClosedText = styled(Text)`
  color: ${(props) => props.theme.colors.ui.error};
`;

export const RestaurantStateView = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
