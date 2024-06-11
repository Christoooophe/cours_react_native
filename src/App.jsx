import {
  Button,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Contact from "./components/Contact";
import TextModal from "./components/TextModal";
import { useState } from "react";
import CourseModal from "./components/CourseModal";
import AffichageArticle from "./components/AffichageArticle";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [listeCourse, setListeCourse] = useState([]);
  function closeModal() {
    setVisible(false)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bloc}>
        {listeCourse.length > 0 ?
          <View>
            <Text style={styles.title}>Ma liste de course :</Text>
            <FlatList data={listeCourse} renderItem={({item}) =>
              <TouchableOpacity onPress={() => setListeCourse(listeCourse.filter((article) => article !== item))}>
                <AffichageArticle item={item}/>
              </TouchableOpacity>}/>
          </View> :
          <Text style={styles.title}>Aucun article à afficher</Text>
        }
      </View>
      <View style={styles.blocdeux}>
        <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
          <Text style={styles.text}>Ajouter</Text>
        </TouchableOpacity>
      </View>
      <CourseModal visible={visible} closeModal={closeModal} articles={listeCourse}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    },
    button : {
      borderRadius : 5,
      margin : 10,
      alignItems : "center",
      justifyContent : "center",
      width : 250,
      height : 50,
      backgroundColor : "#00b3ff"
    },
    text : {
      color : "#ffffff",
      textAlign : "center",
      fontWeight : "bold"
    },
    bloc : {
      flex : 4,
      marginTop : 25
    },
    blocdeux : {
      flex : 1,
      margin : 25
    },
    title : {
      fontWeight : "bold",
      fontSize : 25,
      textAlign : "center"
    }
  });

export default App;
