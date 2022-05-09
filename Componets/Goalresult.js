import { View, Text, StyleSheet,Pressable} from "react-native";
function Goalresults(props) {
  
  return (

    //we can add android_ripple effect here ex: android_ripple{{color:"any color"}}
      <Pressable onPress={props.onDeleteItem.bind(props,props.id)}>
    <View style={styles.goalInput}>
      <Text style={styles.textcolor}>{props.text}</Text>
    </View>
    </Pressable>
  );
}
export default Goalresults;

const styles = StyleSheet.create({
  goalInput: {
    
    borderRadius: 5,
    paddingTop: 10,
    backgroundColor: "#3a32a8",
    padding: 10,
    margin: 10,
  },
  textcolor: {
    color: "white",
  },
});
