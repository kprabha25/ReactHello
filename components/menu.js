import React from "react";
import styled from "styled-components";
import { LinearGradient } from 'expo-linear-gradient';
import { Animated, TouchableOpacity, LogBox, Dimensions } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {connect} from 'react-redux';
import MenuCard from "./menucard";

const screenHeight = Dimensions.get("window").height;

function mapStatToProps(state) {
  console.log("Menu mapStatToProps  ");
    return {menu : state.menu }  
}

function mapDispatchToProps(dispatch) {
  console.log("Menu mapDispatchToProps  ");
  return {
    closeMenu: () => dispatch({
      type: "CLOSEMENU"
    })
  }
}

class Menu extends React.Component {
    state = {
        top: new Animated.Value(screenHeight)
    }

    componentDidMount(){
      LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
      console.log("Menu componentDidMount : " , this.props.menu);
      this.menu();
    }

    //props will not update live, so we use didUPdate()
    componentDidUpdate(){
      console.log("Menu ComponentDidUpdate : " , this.props.menu);
      this.menu()
    }
    menu = ()=>{
      
      if(this.props.menu == "openMenu"){
        Animated.spring(this.state.top, {toValue: 150, friction: 5  }).start()
      }
      if(this.props.menu == "closeMenu"){
        Animated.spring(this.state.top, {toValue: screenHeight, friction: 5  }).start()
      }
        // this.setState({ top: new Animated.Value(900) }); //Will not work
    }
  render() {
    return (
      <AnimatedContainer style={{ position: "absolute", top: this.state.top, zIndex: 100 }}>
        <Cover>
          <LinearGradient 
            colors={["rgba(255,148,115,1)", "rgba(255,123,123,1)"]}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%"
            }}
          ></LinearGradient>
          <MenuText>Menu</MenuText>
        </Cover>
        <TouchableOpacity
        style={{
            position:"absolute", 
            top: 120,
            left: "50%",
            marginLeft: -22
        }} onPress={this.props.closeMenu}> 
        <CloseView>
            <Ionicons name="ios-close" size={35} color="black" />
        </CloseView>
        </TouchableOpacity>
        <Content>
          <MenuCard text="Account"  caption= "Profile" icon="ios-settings" ></MenuCard>
          <MenuCard text="Log Out" caption= "See You Soon" icon="ios-log-out"></MenuCard>
        </Content>
      </AnimatedContainer>
    );
  }
}

//connect will convert states to props and send to Menu
export default connect(mapStatToProps, mapDispatchToProps)(Menu);

const Container = styled.View`
  width: 100%;
  height: 100%;
  background: #f0f3f5;
  border-radius: 26px;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container)
const Cover = styled.View`
  width: 100%;
  height: 142px;
`;

const Content = styled.View`
width: 100%;
height: 100%;
padding: 30px;
`;

const CloseView = styled.View`
width:44px;
height: 44px;
border-radius: 22px;
background: white;
justify-content: center;
align-items: center;
`;
const MenuText = styled.Text`
position: absolute;
font-size: 25px;
font-weight: 600;
color: white;
top: 55px;
left: 42%;
`;
