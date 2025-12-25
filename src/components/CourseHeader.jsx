import "./CourseHeader.css";

const CourseHeader = ({ course }) => {
  const { videos, assessments, resources } = course.progress;

  const totalItems =
    videos.total + assessments.total + resources.total;

  const completedItems =
    videos.completed +
    assessments.completed +
    resources.completed;

  const percentage = Math.round(
    (completedItems / totalItems) * 100
  );

  return (
    <div className="course-header">
      <img
        src={course.image}
        alt={course.title}
        className="course-image"
      />

      <div className="course-info">
        <div className="title-row">
          {course.isFree && <span className="free-tag">FREE</span>}
          <h2>{course.title}</h2>
        </div>

        <div className="stats">
          <span>
            🎥 {videos.completed} / {videos.total} Videos Completed
          </span>
          <span>
            📝 {assessments.completed} / {assessments.total} Assessments
            Completed
          </span>
          <span>
            📚 {resources.completed} / {resources.total} Resources Viewed
          </span>
        </div>

        <div className="progress-row">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="percent">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
