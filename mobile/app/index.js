import { useState, useMemo } from "react";
import { FlatList, StyleSheet, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CourseHeader from "../components/CourseHeader";
import Filters from "../components/Filters";
import ActivityCard from "../components/ActivityCard";
import { courses } from "../constants/data/courses";
import { activities } from "../constants/data/activities";

export default function ActivityListScreen() {
  const [selectedCourse] = useState(courses?.[0] ?? null);
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const filteredActivities = useMemo(() => {
    if (selectedFilter === "ALL") return activities;

    return activities.filter(
      item => item.type === selectedFilter
    );
  }, [selectedFilter]);


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredActivities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ActivityCard activity={item} />}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View>
            <CourseHeader course={selectedCourse} />
            <Filters
              selected={selectedFilter}
              onChange={setSelectedFilter}
            />
          </View>
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
