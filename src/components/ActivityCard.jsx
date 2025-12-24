import React from "react";
import "./ActivityCard.css";

const getActionText = (status) => {
  if (status === "completed") return "Review";
  if (status === "in_progress") return "Continue";
  return "Start";
};

const getScheduleText = (activity) => {
  return activity.schedule || activity.dueDate || "";
};

const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-card">
      <img
        src={activity.image}
        alt={activity.title}
        className="thumbnail"
      />

      <div className="activity-main">
        <span className={`pill ${activity.type}`}>
          {activity.type.toUpperCase()}
        </span>

        <h3>{activity.title}</h3>

        <p className="meta">
          {activity.duration || activity.score || " "}
        </p>
      </div>

      <div className="activity-action">
        {getScheduleText(activity) && (
          <span className="schedule">
            {getScheduleText(activity)}
          </span>
        )}
        <span className={`status ${activity.status}`}>
          {activity.status.replace("_", " ")}
        </span>

        <button className="action-btn">
          {getActionText(activity.status)}
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
