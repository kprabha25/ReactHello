import React from 'react'
import styled from 'styled-components'

export default class MovieCard extends React.Component {
    render(){
        return (
        <Container>
            <Image source={{uri: this.props.image}}/>
            {/* { <Image source={this.props.image } /> }   */}
        </Container>
        )
    }
}

const Container = styled.View`
    width: 130px;
    height: 172px;
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
