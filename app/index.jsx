import { View, Text } from "react-native";
import { useState } from "react";
import { TextInput, } from "react-native-gesture-handler";

export default function App() {

  const [inputput, setInputValue] = useState("");
  const [array1, setArray1] = useState([
    {
      title: "prabhu 0",
    },

    {
      title: "prabhu 1",

    },

    {
      title: "prabhu 2",
    },

    {
      title: "prabhu 3",
    },

    {
      title: "prabhu 4",
    },

  ]);

  function chnageArray(){
    const newArray=[
      ...array1,
      {
        title: inputValue,
      },
    ];
  }

  return (
    <View>
      <TextInput
        value={inputput}
        onPressText={setInputValue}
        placeholder="add data"
      />

      {array1.map((item, index) => {
        return (<Text key={index}>
          {item.title}
        </Text>)
      })}

      <pressable 
      onPress={chnageArray}

      style={{
        backgroundColor:"red",
        width:"100",
        height:"70",
      borderRadius:20,
      marginLeft:150,
          }}
      >
<Text>
  sumbit
</Text>
      </pressable>

    </View>
  );
}