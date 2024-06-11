import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Contact from "./components/Contact";

const App = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View >
          <Contact
            nom={"Todd"}
            prenom={"Davey"}
            equipe={"TAS Milwaukee"}
            moto={"M1000RR"}
            photo={"https://www.iomtoday.co.im/tindle-static/image/2024/06/08/17/25/DSC_6487.jpg?width=669&height=445&crop=669:445"}
          />
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor : "#c3f8fa",
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    }
  });

export default App;
