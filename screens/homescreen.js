import React from "react";
import {
  StatusBar,
  ScrollView,
  TouchableOpacity,
  LogBox,
  Animated,
  Dimensions,
  Navigator,
  Image
} from "react-native";
import styled from "styled-components";
import BigCard from "../components/bigcard";
import SmallCard from "../components/smallcard";
import MovieCard from "../components/moviecard";
import { Ionicons } from "@expo/vector-icons";
import Menu from "../components/menu";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { menu: state.menu };
}
const screenHeight = Dimensions.get("window").height;

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPENMENU",
      }),
  };
}
class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  state = {
    left: 10,
    top: new Animated.Value(900),
    opacity: new Animated.Value(0),
  };
  componentDidUpdate() {
    this.blackScreen();
  }
  blackScreen() {
    this.blackScreen();
  }
  blackScreen() {
    if (this.props.menu == "openMenu") {
      Animated.timing(this.state.top, { toValue: 0, duration: 10 }).start();
      Animated.timing(this.state.opacity, {
        toValue: 0.6,
        duration: 500,
      }).start();
    }
    if (this.props.menu == "closeMenu") {
      Animated.timing(this.state.top, {
        toValue: screenHeight,
        duration: 10,
      }).start();
      Animated.spring(this.state.opacity, { toValue: 0 }).start();
    }
  }
  componentDidMount() {
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
  }
  render() {
    return (
      <Root>
        <Main>
          <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar hidden />
            <Header>
              <TouchableOpacity
                onPress={this.props.openMenu}
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
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              
                {BigCardData.map((data, index) => {
                  return <BigCard key={index} image={data.image}></BigCard>;
                })}

              </ScrollView>
            </BigCardContainer>
            <ContinueText>Continue Watching</ContinueText>
            <MedCardContainer>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {
                  SmallCardData.map((data, index) => (
                    <TouchableOpacity key={index} 
                    onPress = {()=>{
                      this.props.navigation.push("Video", {
                        videoInfo: data,
                        datas: SmallCardData,
                        movieData: MovieCardData
                        });
                    }}>
                       <SmallCard image={data.image} />
                       </TouchableOpacity>
                  
                ))
                  
                }
              </ScrollView>
            </MedCardContainer>
            <LikeText>You May Also Like</LikeText>
            <MovieCardContainer>
              <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} >
                {
                  MovieCardData.map((data, index) => (
                  <TouchableOpacity key={index}
                    onPress = {()=>{
                      this.props.navigation.push("Video", {
                        videoInfo: data,
                        datas: SmallCardData,
                        movieData: MovieCardData
                        });
                    }} >
                    <MovieCard image={data.image} />
                  </TouchableOpacity>
                ))
                }
              </ScrollView>
            </MovieCardContainer>
          </ScrollView>
        </Main>

        <AnimatedBlack
          style={{ top: this.state.top, opacity: this.state.opacity }}
        />
        <Menu />
      </Root>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen); //send state, dispatch to Reducer
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
    image: "http://www.cinepunch.in/wp-content/uploads/2015/01/thala-ajith-cover-pic.jpg",
    title:"Big Boss Season 3"
  },
  {
    image: "http://www.cinepunch.in/wp-content/uploads/2015/01/ajith-kumar.jpg",
    title:"2"
  },
  {
    image: "http://www.cinepunch.in/wp-content/uploads/2015/01/ajith-hd-wallpaper.png",
    title:"3"
  },
];
const MovieCardData = [
  {
    image: "http://www.cinespot.net/gallery/d/3271882-1/Ajith+in+Viswasam+_1_.jpg",
    title:"Big Boss Season 3"
  },
  {
    image: "http://www.cinepunch.in/wp-content/uploads/2015/01/ajith-in-dubai.jpg",
    title:"2"
  },
  {
    image: "http://www.cinepunch.in/wp-content/uploads/2015/01/ajith-pics.jpg",
    title:"3"
  },
  {
    image: "http://www.cinepunch.in/wp-content/uploads/2015/01/thala-ajith-at-aero-india.jpg",
    title:"4"
  }
];
const MovieCardData2 = [
  {
    image: require("../assets/ajith05.png"),
    title:"Big Boss Season 3"
  },
  {
    image: require("../assets/ajith06.png"),
    title:"2"
  },
  {
    image: require("../assets/ajith07.png"),
    title:"3"
  },
];
const Root = styled.View`
  flex: 1;
`;
const Main = styled.View`
  background-color: #eaeaea;
  flex: 1;
`;

const Black = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.6;
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
  font-weight: bold;
  text-transform: uppercase;
`;
const LikeText = styled.Text`
  margin-left: 10px;
  margin-top: 20px;
  color: #b4b4b4;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
`;

const MedCardContainer = styled.View`
  margin-top: 20px;
  margin-left: 5px;
`;
const MovieCardContainer = styled.View`
  margin-top: 20px;
  margin-left: 5px;
  margin-bottom: 20px;
`;

const AnimatedBlack = Animated.createAnimatedComponent(Black);
