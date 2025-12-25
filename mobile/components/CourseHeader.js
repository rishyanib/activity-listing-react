import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function CourseHeader({ course }) {
  if (!course) return null;

  return (
    <View style={styles.container}>
      <Image source={{ uri: course.image }} style={styles.banner} />

      <View style={styles.content}>
        <Text style={styles.title}>{course.title}</Text>

        <Text style={styles.progress}>
          {course.completedActivities}/{course.totalActivities} activities completed
        </Text>

        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${
                  (course.completedActivities / course.totalActivities) * 100
                }%`,
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  banner: {
    width: "100%",
    height: 160,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
  },
  progress: {
    fontSize: 13,
    color: "#555",
    marginBottom: 8,
  },
  progressBar: {
    height: 6,
    backgroundColor: "#e5e7eb",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#2563eb",
  },
});
