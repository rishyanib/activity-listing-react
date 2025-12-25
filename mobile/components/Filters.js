import { View, Text, Pressable, StyleSheet } from "react-native";

const FILTERS = [
  { label: "ALL", value: "ALL" },
  { label: "CLASS", value: "class" },
  { label: "ASSIGNMENT", value: "assignment" },
  { label: "QUIZ", value: "quiz" },
];

export default function Filters({ selected, onChange }) {
  return (
    <View style={styles.container}>
      {FILTERS.map(filter => (
        <Pressable
          key={filter.value}
          onPress={() => onChange(filter.value)}
          style={[
            styles.button,
            selected === filter.value && styles.active,
          ]}
        >
          <Text
            style={[
              styles.text,
              selected === filter.value && styles.activeText,
            ]}
          >
            {filter.label}   {/* ✅ THIS IS THE FIX */}
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
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#EEE",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
  },
  active: {
    backgroundColor: "#1A73E8",
  },
  text: {
    fontSize: 12,
  },
  activeText: {
    color: "#fff",
  },
});
