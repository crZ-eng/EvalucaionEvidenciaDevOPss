import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import categories from "../data/categories.json";

export default function StatsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        📊 Estadísticas de Categorías
      </Text>

      <View style={styles.table}>
        <View style={styles.rowHeader}>
          <Text style={styles.header}>ID</Text>
          <Text style={styles.header}>
            Categoría
          </Text>
          <Text style={styles.header}>
            Popularidad
          </Text>
        </View>

        {categories.map((item) => (
          <View
            key={item.id}
            style={styles.row}
          >
            <Text style={styles.cell}>
              {item.id}
            </Text>

            <Text style={styles.cell}>
              {item.categoria}
            </Text>

            <Text style={styles.cell}>
              {item.popularidad}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 15,
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  table: {
    borderWidth: 1,
    borderColor: "#475569",
  },

  rowHeader: {
    flexDirection: "row",
    backgroundColor: "#334155",
    paddingVertical: 12,
  },

  row: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#475569",
    paddingVertical: 12,
  },

  header: {
    flex: 1,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  cell: {
    flex: 1,
    color: "#fff",
    textAlign: "center",
  },
});