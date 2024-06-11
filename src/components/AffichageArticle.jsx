import React from "react";
import { Text, View, StyleSheet } from "react-native";

const AffichageArticle = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texte}>{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    backgroundColor : "#7e1cff",
    width : 300,
    height : 50,
    borderRadius : 5,
    margin : 5,
    flex : 1,
    alignItems : "center",
    justifyContent : "center"
  },
  texte : {
    color : "#f7f7f7",
    textAlign : "center",
    fontWeight : "bold",
    textTransform : "capitalize"
  }
})
export default AffichageArticle;
