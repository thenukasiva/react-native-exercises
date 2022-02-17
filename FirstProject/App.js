import React, {useState } from 'react';
import { Text, View, TextInput, Image} from 'react-native';

const getFullName = (firstName, lastName) => {
  return firstName + " " + lastName;
}

// Child Component
const Cat = (props) => {
  const [isHappy, setIsHappy] = useState(true);
  return ( 
    <View>
      <Text>Hello, I am {props.name}! I am feeling {isHappy ? "happy" : "sad"}</Text>
      <Button 
      onPress={() => {setIsHappy(false);}}
      disabled={!isHappy}
      title={isHappy ? "Make me happy again please!" : "Thank you!" }/>
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