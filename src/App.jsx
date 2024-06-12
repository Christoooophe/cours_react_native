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
import Calculatrice from "./components/calculatrice/Calculatrice";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Calculatrice/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1
  }
});

export default App;
