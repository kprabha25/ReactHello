import React from 'react';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native'

class CourseScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render(){
        return (
            <Container>
                <TouchableOpacity onPress={()=>{
                this.props.navigation.goBack();
            }}>
                <Text>CourseScreen</Text>
                </TouchableOpacity>
            </Container>
        )
    }
}

export default CourseScreen;

const Container = styled.View `
flex: 1;
justify-content: center;
align-items: center;
`

const Text = styled.Text `
`;