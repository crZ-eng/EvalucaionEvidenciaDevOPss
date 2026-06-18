// import { Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white'
//       }}
//     >
//       <Text style={{ color: 'black' }}>
//         Hola Mundo
//       </Text>
//     </View>
//   );
// }
import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import JokesScreen from "./screens/JokesScreen";


export default function App() {
  const [screen, setScreen] = useState("jokes");

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity
          style={[
            styles.button,
            screen === "jokes" && styles.activeButton,
          ]}
          onPress={() => setScreen("jokes")}
        >
          <Text style={styles.buttonText}>
            😂 Chistes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            screen === "stats" && styles.activeButton,
          ]}
          onPress={() => setScreen("stats")}
        >

        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {screen === "jokes"
          ? <JokesScreen />
          : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },

  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: "#1e293b",
  },

  button: {
    backgroundColor: "#334155",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  activeButton: {
    backgroundColor: "#f59e0b",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  content: {
    flex: 1,
  },
});