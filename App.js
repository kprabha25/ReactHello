import React from "react";
import { StatusBar, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import BigCard from "./components/bigcard";
import SmallCard from "./components/smallcard";
import { Ionicons } from "@expo/vector-icons";
import Menu from "./components/menu";

export default class App extends React.Component {
  state = {
    left: 10
  }
  render() {
    return (
      <Main>
        <Menu />
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar hidden />
          <Header>
            <TouchableOpacity
              onPress={() => {
                console.log("Menu Prabha yes ", this.state.left);
                this.setState({ left: 300 });
              }}
              style={{
                position: "absolute",
                top: 12,
                left: this.state.left,
                zIndex: 100,
              }}
            >
              <Ionicons name="ios-menu" size={30} color="gray" />
            </TouchableOpacity>
            <Logo></Logo>
            <Profile />
          </Header>
          <BigCardContainer>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {BigCardData.map((data, index) => {
                return <BigCard key={index} image={data.image}></BigCard>;
              })}
            </ScrollView>
          </BigCardContainer>
          <ContinueText>Continue Watching</ContinueText>
          <MedCardContainer>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {SmallCardData.map((data, index) => {
                return <SmallCard key={index} image={data.image}></SmallCard>;
              })}
            </ScrollView>
          </MedCardContainer>
        </ScrollView>
      </Main>
    );
  }
}

const BigCardData = [
  {
    image:
      "https://www.businessupturn.com/wp-content/uploads/2020/09/b-2-300x163.jpg",
  },
  {
    image:
      "https://www.businessupturn.com/wp-content/uploads/2020/09/i-2-300x160.jpg",
  },
  {
    image:
      "https://www.businessupturn.com/wp-content/uploads/2020/09/g-2-300x147.jpg",
  },
  {
    image:
      "https://www.businessupturn.com/wp-content/uploads/2020/09/a-2-300x169.jpg",
  },
];

const SmallCardData = [
  {
    image: require("./assets/ajith01.jpg"),
  },
  {
    image: require("./assets/ajith02.jpg"),
  },
  {
    image: require("./assets/ajith04.jpg"),
  },
];
const Main = styled.View`
  background-color: #eaeaea;
  flex: 1;
`;

const Header = styled.View`
  width: 100%;
  height: 56px;
  background: white;
`;

const Profile = styled.Image`
  position: absolute;
  top: 7px;
  right: 5px;
  width: 40px;
  height: 40px;
  background: #c4c4c4;
  border-radius: 22px;
`;

const Logo = styled.View`
  margin-top: 20px;
  margin-left: 40px;
  width: 85px;
  height: 15px;
  background: lightgray;
  border-radius: 10px;
`;

const BigCardContainer = styled.View`
  margin-top: 20px;
`;

const ContinueText = styled.Text`
  margin-left: 10px;
  margin-top: 20px;
  color: #b4b4b4;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;

const MedCardContainer = styled.View`
  margin-top: 20px;
`;
