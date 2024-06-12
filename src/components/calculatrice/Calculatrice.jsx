import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const Calculatrice = () => {
  const [result, setResult] = useState("0");

  function createOperation(value) {
    if (result[0] == 0 && result[1] !== '.') {
      setResult(result.substring(1) + value);
      return
    }
    setResult(result + value);
  }
  function getResultOperation() {
    setResult(eval(result).toString());
  }
  return (
    <View style={styles.main}>
      <View style={styles.main}>
        <Text style={styles.text}>Calculatrice</Text>
      </View>
      <View style={styles.bloc}>
        <TextInput value={result.toString()} style={styles.resultInput}/>
        <View style={styles.row}>
          <Text style={styles.greyButton}>AC</Text>
          <Text style={styles.greyButton}>^</Text>
          <Text style={styles.greyButton} onPress={(e) => createOperation('%')}>%</Text>
          <Text style={styles.greyButton} onPress={(e) => createOperation('/')}>/</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.whiteButton} onPress={(e) => createOperation(7)}>7</Text>
          <Text style={styles.whiteButton} onPress={(e) => createOperation(8)}>8</Text>
          <Text style={styles.whiteButton} onPress={(e) => createOperation(9)}>9</Text>
          <Text style={styles.greyButton} onPress={(e) => createOperation('*')}>X</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.whiteButton} onPress={(e) => createOperation(4)}>4</Text>
          <Text style={styles.whiteButton} onPress={(e) => createOperation(5)}>5</Text>
          <Text style={styles.whiteButton} onPress={(e) => createOperation(6)}>6</Text>
          <Text style={styles.greyButton} onPress={(e) => createOperation('-')}>-</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.whiteButton} onPress={(e) => createOperation(1)}>1</Text>
          <Text style={styles.whiteButton} onPress={(e) => createOperation(2)}>2</Text>
          <Text style={styles.whiteButton} onPress={(e) => createOperation(3)}>3</Text>
          <Text style={styles.greyButton} onPress={(e) => createOperation('+')}>+</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.whiteButton} onPress={(e) => createOperation('.')}>.</Text>
          <Text style={styles.whiteButton} onPress={(e) => createOperation(0)}>0</Text>
          <Text style={styles.whiteButton} onPress={() => setResult("0")}>Del</Text>
          <Text style={styles.greyButton} onPress={() => getResultOperation()}>=</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main : {
    backgroundColor : "#000000",
    flex : 1
  },
  bloc : {
    flex : 3
  },
  text : {
    color : "#ffffff",
    fontWeight : "bold",
    textAlign : "center",
    fontSize : 25,
    marginTop : 15
  },
  row : {
    width : 400,
    justifyContent : "space-around",
    flexDirection : "row",
    marginBottom : 15
  },
  greyButton  : {
    height : 70,
    width : 70,
    borderRadius : 10,
    backgroundColor : "#7e8580",
    textAlign : "center",
    textAlignVertical : "center",
    color : "#ffffff",
    fontWeight : "bold",
    fontSize : 20,
  },
  whiteButton : {
    width : 70,
    borderRadius : 50,
    backgroundColor : "#ffffff",
    textAlign : "center",
    textAlignVertical : "center",
    color : "#000000",
    fontWeight : "bold",
    fontSize : 20,
  },
  resultInput : {
    color : "#ffffff",
    width : 380,
    textAlign : "right",
    fontSize : 40,
    fontWeight : "bold",
  }
})
export default Calculatrice;
