import styled from "styled-components";
import { SafeAreaView, StatusBar, Dimensions } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  align-items: center;
  justify-content: center;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  width: ${Dimensions.get("window").width}px;
`;
