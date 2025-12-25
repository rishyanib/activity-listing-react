import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CourseHeader from "../components/CourseHeader";
import Filters from "../components/Filters";
import ActivityCard from "../components/ActivityCard";

import { courses } from "../constants/data/courses";
import { activities } from "../constants/data/activities";

export default function ActivityListScreen() {
  // ✅ DEFINE selectedCourse
  const [selectedCourse] = useState(
    courses && courses.length > 0 ? courses[0] : null
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ActivityCard activity={item} />}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <>
            <CourseHeader course={selectedCourse} />
            <Filters />
          </>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
});
