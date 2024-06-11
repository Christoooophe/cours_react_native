import React, { useState } from "react";
import { Button, Image, Modal, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";

const CourseModal = (props) => {
  const [article, setArticle] = useState("");
  function addArticle(array, article) {
    return array.push(article)
  }

  return (
    <Modal visible={props.visible}>
      <View style={styles.modal}>
        <Image style={styles.image} source={{uri : "https://t3.ftcdn.net/jpg/05/60/17/66/360_F_560176615_cUua21qgzxDiLiiyiVGYjUnLSGnVLIi6.jpg"}}/>
        <TextInput placeholder={"Indiquez un article"} value={article} onChangeText={newText => setArticle(newText)} style={styles.input}/>
        <View style={styles.container}>
          <TouchableOpacity style={styles.add} onPress={() => {addArticle(props.articles, article), setArticle("")}}>
            <Text style={styles.text}>Ajouter un article</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.delete} title={"Annuler"} onPress={props.closeModal}>
            <Text style={styles.text}>Quitter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal : {
    flex : 1,
    alignItems : "center",
  },
  container : {
    flex : 1,
    display : "flex",
    flexDirection : "row"
  },
  add : {
    width : 125,
    height : 25,
    backgroundColor : "#00b3ff",
    margin : 10
  },
  delete : {
    width : 125,
    height : 25,
    backgroundColor : "#fc190d",
    margin : 10
  },
  text : {
    color : "#ffffff",
    textAlign : "center",
  },
  input: {
    height: 40,
    margin: 12,
    width : 300,
    borderWidth: 1,
    padding: 10,
  },
  image : {
    width : 120,
    height : 120
  }
})
export default CourseModal;
