import * as React from "react";
import { StyleSheet, Text, SafeAreaView, Image, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// @ts-ignore
export default function DetailScreen({ navigation, route }) {
  const name = route.params.person["name"];
  // @ts-ignore
  const url = route.params.person["url"];

  //Pour des fins de tests je met 3 fois la description, c'est pour montrer le scroll view
  const description =
    route.params.person["description"] +
    "\n\n" +
    route.params.person["description"] +
    "\n\n" +
    route.params.person["description"];
  navigation.setOptions({ title: "Profil de " + name });
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          width: 150,
          height: 150,
          uri: url,
        }}
      />
      <Text style={styles.title}>{name}</Text>
      <ScrollView>
        <Text style={styles.description}>{description}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    marginTop: 20,
    borderRadius: 100,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    margin: 20,
  },
  retour: {
    alignSelf: "baseline",
  },
});
