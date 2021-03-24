import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import SomeText from "./components/sometext";

export default class App extends React.Component {
  state = {
    text: "Logged Out"
  }
  render() {
    return (
      <View style={styles.classname}>
        <TouchableOpacity onPress={() => {
          this.setState({ text : "Logged In" })
        }}>
          <SomeText name="Login" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          this.setState({ text : "Logged Out" })
        }}>
          <SomeText name="Logout" />
        </TouchableOpacity>


        <Image source={require("./assets/ajith01.jpg")} />
        <Image style={{ width: 100, height: 100 }} source={{ uri: "https://www.businessupturn.com/wp-content/uploads/2020/09/d-2-200x300.jpg" }} />

        <Text style={styles.textstyle}>{this.state.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  classname: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },
  textstyle: {
    fontSize: 20,
    color: "white",
    backgroundColor: "orange",
    margin:20
  }
})
