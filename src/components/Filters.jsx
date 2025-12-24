import React from "react";
import "./Filters.css";

const Filters = ({ filters, setFilters }) => {
  return (
    <div className="filters">
      <select
        value={filters.type}
        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
      >
        <option value="all">All Types</option>
        <option value="class">Class</option>
        <option value="assignment">Assignment</option>
        <option value="quiz">Quiz</option>
        <option value="discussion">Discussion</option>
      </select>

      <select
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
      >
        <option value="all">All Status</option>
        <option value="not_started">Not Started</option>
        <option value="in_progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default Filters;
