import { Image, Text, View, StyleSheet } from "react-native";

const Contact = ({nom, prenom, equipe, moto, photo}) => {
  return (
    <View style={style.container}>
      <Image source={{uri : photo}} style={style.photo}/>
      <Text style={style.textSize}>Nom : <Text style={style.textBold}>{nom}</Text></Text>
      <Text style={style.textSize}>Prénom : <Text style={style.textBold}>{prenom}</Text></Text>
      <Text style={style.textSize}>Equipe : <Text style={style.textBold}>{equipe}</Text></Text>
      <Text style={style.textSize}>Moto : <Text style={style.textBold}>{moto}</Text></Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop : 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo : {
    width : 200,
    height : 200,
  },
  textBold : {
    fontWeight : "bold"
  },
  textSize : {
    fontSize : 25
  }
})

export default Contact;
