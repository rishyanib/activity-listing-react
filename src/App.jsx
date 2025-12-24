import React, { useMemo, useState } from "react";
import { activities } from "./data/activities";
import ActivityCard from "./components/ActivityCard";
import Filters from "./components/Filters";
import "./App.css";

function App() {
  const [filters, setFilters] = useState({
    type: "all",
    status: "all"
  });

  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      const typeMatch =
        filters.type === "all" || activity.type === filters.type;
      const statusMatch =
        filters.status === "all" || activity.status === filters.status;

      return typeMatch && statusMatch;
    });
  }, [filters]);

  return (
    <div className="app-container">
      <h1>Learning Activities</h1>

      <Filters filters={filters} setFilters={setFilters} />

      <div className="activity-list">
        {filteredActivities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}

        {filteredActivities.length === 0 && (
          <p className="empty">No activities found</p>
        )}
      </div>
    </div>
  );
}

export default App;
