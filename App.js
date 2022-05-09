import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Modal,
  Image,
} from "react-native";
import Goalresults from "./Componets/Goalresult";

export default function App() {
  const [comingdata, SetData] = useState("");
  const [listdata, setlistdata] = useState([]);

  const [Modalisvisible, setModalisvisible] = useState(false);

  function modalhandler() {
    setModalisvisible(true);
  }
  function endmodalhandler() {
    setModalisvisible(false);
  }

  function fetchText(enteredText) {
    SetData(enteredText);
  }
  function buttonPress() {
    setlistdata((newdata) => [
      ...newdata,
      { text: comingdata, id: Math.random().toString() },
    ]);
    endmodalhandler();
  }

  function deleteitem(id) {
    setlistdata((newdata) => {
      return newdata.filter((goal) => goal.id !== id);
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.upperbutton}>
        <Button
          title="Add your goals"
          color={"#A020F0"}
          onPress={modalhandler}
        />
      </View>
      {Modalisvisible && (
        <Modal visible={Modalisvisible} animationType={"slide"}>
          
          <View style={styles.container1}>
            
            <Image style={styles.image} source={{uri:"https://www.pngfind.com/pngs/m/107-1072275_goals-png-transparent-png.png"}}/>
            <TextInput
              style={styles.textInput}
              placeholder="Add Your Goals here..."
              onChangeText={fetchText}
            />
            {/*button container start */}
            <View style={styles.buttoncontainer}>
              <View style={styles.button}>
                <Button
                  color={"#A020F0"}
                  title="Add Goal"
                  onPress={buttonPress}
                />
              </View>

              <View style={styles.button}>
                <Button
                  color={"#FF0000"}
                  title="cancel"
                  onPress={endmodalhandler}
                />
              </View>
            </View>
            {/*button container end */}
          </View>
        </Modal>
      )}
      <View style={styles.hello}>
        <FlatList
          data={listdata}
          renderItem={(itemdata) => {
            return (
              <Goalresults
                id={itemdata.item.id}
                key={itemdata.item.id}
                onDeleteItem={deleteitem}
                text={itemdata.item.text}
              />
            );
          }}
          // keyExtractor={(item, index) => {
          //   return item.id;
          // }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    paddingHorizontal: 18,
  },
  container1: {
    flex: 1,
    height: 150,
    // paddingTop: 10,

    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: 350,
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
    padding: 8,
  },

  hello: {
    flex: 3,
  },
  goalsc: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 140,
  },
  buttoncontainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    padding: 10,
    width: "40%",
  },
  upperbutton: {
    borderBottomWidth: 1,
    borderBottomColor: "#808080",
  },
  image: {
    paddingBottom:18,
    marginBottom:22,
    width: 100,
    height: 100,
    // padding: 10,
  },
});
