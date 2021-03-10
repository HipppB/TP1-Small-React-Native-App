import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import members from "../assets/data/members.json";
import urls from "../assets/data/urlpictures.json";
// @ts-ignore
export default function ListScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollArea}>
        {members.map((m) => (
          <TouchableOpacity
            style={styles.touchable}
            onPress={() =>
              props.navigation.navigate("Details", {
                person: m,
              })
            }
          >
            <Image
              style={styles.image}
              source={{
                width: 100,
                height: 100,
                // @ts-ignore
                uri: m["url"],
              }}
            />
            <Text
              style={{
                color: "black",
                fontSize: 20,
                paddingBottom: 5,
                textAlign: "center",
              }}
            >
              {m["name"]}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleArea: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  touchable: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  scrollArea: {
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 0,
  },
  image: {
    marginTop: 0,
    borderRadius: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
