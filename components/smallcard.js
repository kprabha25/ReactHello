import React from 'react'
import styled from 'styled-components'
import {LinearGradient} from 'expo-linear-gradient'
import {Ionicons} from '@expo/vector-icons'

export default class SmallCard extends React.Component {
    render(){
        return (
        <Container>
        <LinearGradient 
        colors={["rgba(0,0,0,0)","rgba(0,0,0,0.8)"]}
        style={{
            position: "absolute",
            width: "100%",
            height: "50%",
            top: 55
        }}
        ></LinearGradient>
            {/* <Image source={{uri: this.props.image}}/> */}
            { <Image source={this.props.image } /> }
            <TextContainer>
                <Ionicons name="ios-play" size={18} color="white" /> 
                <Text>S3 E55. 16 Aug</Text>
            </TextContainer>            
        </Container>
        )
    }
}

const Container = styled.View`
    width: 197px;
    height: 110px;
    border-radius: 5px;
    background: white;
    overflow: hidden;
    margin-left: 10px;   
`;

const Image = styled.Image`
width: 100%;
height:100%;
z-index:-5;
`

const Text = styled.Text `
font-size: 18px;
font-weight: bold;
color: white;
padding-left: 10px;
`

const TextContainer = styled.View `
position: absolute;
top: 80px;
left : 10px;
flex-direction: row;
align-items: center;
`