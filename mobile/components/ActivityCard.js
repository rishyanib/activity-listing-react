import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ActivityCard({ activity }) {
  if (!activity) return null;

  return (
    <View style={styles.card}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <Image source={{ uri: activity.image }} style={styles.thumbnail} />

        <View style={styles.mainInfo}>
          <Text style={styles.title} numberOfLines={2}>
            {activity.title}
          </Text>

          <Text style={styles.meta}>
            {activity.type} • {activity.duration}
          </Text>
        </View>

       <View style={styles.rightInfo}>
         <Text style={styles.status}>
           {activity.status.replace(/_/g, " ").toUpperCase()}
         </Text>
         <Text style={styles.scheduled}>{activity.scheduledAt}</Text>
       </View>

      </View>

      {/* Action */}
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            {activity.status === "Completed" ? "Review" : "Start"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

 thumbnail: {
   width: 100,
   height: 100,
   borderRadius: 8,
   backgroundColor: "#eee", // temporary to see bounds
 },
  mainInfo: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
  },

  meta: {
    fontSize: 12,
    color: "#666",
  },

  rightInfo: {
    alignItems: "flex-end",
    marginLeft: 12,
  },

  status: {
    fontSize: 12,
    fontWeight: "500",
    color: "#2563eb",
  },

  scheduled: {
    fontSize: 11,
    color: "#666",
    marginTop: 4,
  },

  actionRow: {
    marginTop: 12,
    alignItems: "flex-end",
  },

  button: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
  },

  buttonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500",
  },
});
