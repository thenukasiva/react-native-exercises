import React, {useState} from 'react';
import { Text, View, TextInput, Image, Button} from 'react-native';

const getFullName = (firstName, lastName) => {
  return firstName + " " + lastName;
}

// Child Component
const Cat = (props) => {
  const [isSad, setIsHappy] = useState(true);
  return ( 
    <View>
      <Text>Hello, I am {props.name}! I am feeling {isSad ? "sad" : "happy"}</Text>
      <Button 
      onPress={() => {setIsHappy(false);}}
      disabled={!isSad}
      title={isSad ? "Make me happy again please!" : "Thank you!" }/>
      <TextInput style={{
        height: 25,
        borderColor: 'gray',
        borderWidth: 1
      }}
      defaultValue="What is your name? Type it here"
      />
    </View>
    
  );
} 

// Parent Component
const Cafe = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Cat name="Thenuka"/>
      <Cat name="Siva"/>
      <Cat name="Mana"/>

      <Image 
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 100, height: 100}}/>

    </View>
  );
}

export default Cafe;