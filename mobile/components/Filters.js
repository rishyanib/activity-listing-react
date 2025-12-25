import { View, Text, Pressable, StyleSheet } from "react-native";

const FILTERS = ["ALL", "CLASS", "ASSIGNMENT", "QUIZ"];

export default function Filters({ selected, onChange }) {
  return (
    <View style={styles.container}>
      {FILTERS.map(filter => (
        <Pressable
          key={filter}
          onPress={() => onChange(filter)}
          style={[
            styles.button,
            selected === filter && styles.active
          ]}
        >
          <Text
            style={[
              styles.text,
              selected === filter && styles.activeText
            ]}
          >
            {filter}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 8
  },
  button: {
    backgroundColor: "#EEE",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8
  },
  active: {
    backgroundColor: "#1A73E8"
  },
  text: {
    fontSize: 12
  },
  activeText: {
    color: "#fff"
  }
});
