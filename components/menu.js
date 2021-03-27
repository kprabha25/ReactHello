import React from "react";
import styled from "styled-components";
import { LinearGradient } from 'expo-linear-gradient';
import { Animated, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class Menu extends React.Component {
    state = {
        top: new Animated.Value(900)
    }

    componentDidMount(){
        Animated.spring(this.state.top, {toValue: 0, friction: 5 }).start()
    }
    closeMenu = ()=>{
        Animated.spring(this.state.top, {toValue: 900, friction: 5 }).start()

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
        </Cover>
        <TouchableOpacity
        style={{
            position:"absolute", 
            top: 120,
            left: "50%",
            marginLeft: -22
        }} onPress={this.closeMenu}> 
        <CloseView>
            <Ionicons name="ios-close" size={35} color="black" />
        </CloseView>
        </TouchableOpacity>
        <Content />
      </AnimatedContainer>
    );
  }
}
const Container = styled.View`
  width: 100%;
  height: 100%;
  background: #f0f3f5;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container)
const Cover = styled.View`
  width: 100%;
  height: 142px;
`;

const Content = styled.View`

`;

const CloseView = styled.View`
width:44px;
height: 44px;
border-radius: 22px;
background: white;
justify-content: center;
align-items: center;
`;