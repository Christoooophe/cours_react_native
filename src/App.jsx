import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Contact from "./components/Contact";

const App = () => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView >
          <Contact
            nom={"Todd"}
            prenom={"Davey"}
            equipe={"TAS Milwaukee"}
            moto={"M1000RR"}
            photo={"https://www.iomtoday.co.im/tindle-static/image/2024/06/08/17/25/DSC_6487.jpg?width=669&height=445&crop=669:445"}
          />
          <Contact
            nom={"Hickman"}
            prenom={"Peter"}
            equipe={"FHO Racing"}
            moto={"M1000RR"}
            photo={"https://cdn-7.motorsport.com/images/amp/6gpZEBG0/s1000/peter-hickman-superbike-1.jpg"}
          />
          <Contact
            nom={"Harrison"}
            prenom={"Dean"}
            equipe={"Honad UK"}
            moto={"CBR1000RR-R"}
            photo={"https://cdn-9.motorsport.com/images/amp/6zQKzNLY/s1000/dean-harrison-superbike-tt-202.jpg"}
          />
          <Contact
            nom={"Dunlop"}
            prenom={"Michael"}
            equipe={"MD Racing"}
            moto={"CBR1000RR-R"}
            photo={"https://www.newsletter.co.uk/webimg/b25lY21zOjYyOTAwZGI2LWQ1ZTYtNDcyMi04NGRlLTZiYmQzMTZlMGMyMTo4ZWM1MjBiNC00NWZjLTRiODYtYWI5Ni01NmY1MWM0YjY2ZGI=.jpg?crop=3:2,smart&width=640&quality=65"}
          />
        </ScrollView>
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
