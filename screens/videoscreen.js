import React from 'react';
import styled from 'styled-components';
import {TouchableOpacity, ScrollView} from 'react-native';
import {Video} from 'expo-av';
import SmallCard from "../components/smallcard";
import MovieCard from "../components/moviecard";

class VideoScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render(){
        const { navigation } = this.props;
        const navData = navigation.getParam("videoInfo")
        const SmallCardData = navigation.getParam("datas")
         const MovieCardData = navigation.getParam("movieData")
         return (
           <Container>
             <ScrollView showsVerticalScrollIndicator={false}>
               <VideoContainer>
                 <Video
                   source={{ uri: "" }}
                   shouldPlay
                   resizeMode="cover"
                   useNativeControls={true}
                   style={{ width: "100%", height: "100%" }}
                 />
               </VideoContainer>
               <VideoTitle>{navData.title}</VideoTitle>
               <ContinueText>Continue Watching</ContinueText>
               <MedCardContainer>
                 <ScrollView
                   horizontal={true}
                   showsHorizontalScrollIndicator={false}
                 >
                   {SmallCardData.map((data, index) => (
                       <TouchableOpacity key={index} onPress = {()=>{
                      this.props.navigation.push("Video", {
                        videoInfo: data,
                        datas: SmallCardData,
                        movieData: MovieCardData
                        });
                    }}>
                       <SmallCard image={data.image} />
                       </TouchableOpacity>
                     
                   ))}
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
           </Container>
         );
    }
}

export default VideoScreen;

const Container = styled.View`
flex: 1;
background: #eaeaea;
`

const VideoContainer  = styled.View`
width: 100%;
height: 201px;
background: black;
`;

const VideoTitle = styled.Text` 
margin-top: 10px;
margin-left: 10px;
margin-bottom: 10px;
color: #000;
font-family: Roboto;
font-weight: bold;
font-size: 20px;
line-height: 14px;
`;

const MedCardContainer = styled.View`
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
const MovieCardContainer = styled.View`
  margin-top: 20px;
  margin-left: 5px;
  margin-bottom: 20px;
`;