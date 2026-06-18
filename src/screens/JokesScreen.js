import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

export default function JokesScreen() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadJokes() {
    try {
      setLoading(true);

      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Any?amount=10&safe-mode"
      );

      const data = await response.json();

      if (data.jokes) {
        setJokes(data.jokes);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadJokes();
  }, []);

  function renderJoke({ item }) {
    return (
      <View style={styles.card}>
        <Text style={styles.category}>
          {item.category}
        </Text>

        {item.type === "single" ? (
          <Text style={styles.joke}>
            🤣 {item.joke}
          </Text>
        ) : (
          <>
            <Text style={styles.setup}>
              ❓ {item.setup}
            </Text>

            <Text style={styles.delivery}>
              💡 {item.delivery}
            </Text>
          </>
        )}
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator
          size="large"
          color="#facc15"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={loadJokes}
      >
        <Text style={styles.buttonText}>
          🎲 Obtener nuevos chistes
        </Text>
      </TouchableOpacity>

      <FlatList
        data={jokes}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={renderJoke}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 15,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#0f172a",
  },

  button: {
    backgroundColor: "#f59e0b",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  statsButton: {
    backgroundColor: "#22c55e",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
  },

  category: {
    color: "#facc15",
    fontWeight: "bold",
    marginBottom: 10,
  },

  joke: {
    color: "#fff",
    fontSize: 16,
  },

  setup: {
    color: "#38bdf8",
    marginBottom: 10,
    fontSize: 16,
  },

  delivery: {
    color: "#facc15",
    fontWeight: "bold",
    fontSize: 16,
  },
});