import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import { useState } from "react";
import { css } from "@emotion/native";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! no</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title={count.toString()}
        style={styles.button}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = {
  button: css`
    display: flex;
  `,
  container: css`
    display: flex;
    background-color: #fff;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
    height: 100%;
  `,
};
