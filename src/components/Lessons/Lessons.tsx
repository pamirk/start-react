import React, { memo } from "react";
import { Box } from "@material-ui/core";

import Lesson from "./Lesson";
import { Course, courses } from "./Model";

interface LessonsProps {
  course: Course;
}

export default memo(({ course }: LessonsProps) => {
  const lessons = courses[course];
  return (
    <>
      {lessons.map((lesson, index) => (
        <Box marginBottom={2} key={lesson.id}>
          <Lesson {...{ lesson, index }} />
        </Box>
      ))}
    </>
  );
});
