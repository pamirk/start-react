import React from "react";
import { Box, useTheme } from "@material-ui/core";

import NavigatorPane from "./NavigatorPane";
import { goToLesson } from "../components";
import { Course, Lesson, courses } from "../components/Lessons/Model";
import { getCourse } from "../components/Lessons";

const EmptyPane = ({ direction }: { direction: "left" | "right" }) => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flex={1}
      borderColor={theme.palette.divider}
      borderRight={
        direction === "left" ? `1px solid ${theme.palette.divider}` : "0"
      }
    />
  );
};

interface NavigatorProps {
  lesson: Lesson;
}

export default ({ lesson }: NavigatorProps) => {
  const { id } = lesson;
  const course = getCourse(lesson);
  const lessons = courses[course as Course];
  const theme = useTheme();
  const index = lessons.findIndex(l => l.id === id);
  const previousLesson = lessons[index - 1];
  const nextLesson = lessons[index + 1];
  const hasPrevious = previousLesson && !previousLesson.comingSoon;
  const hasNext = nextLesson && !nextLesson.comingSoon;
  return (
    <Box
      borderColor={theme.palette.divider}
      borderTop="1px solid"
      display="flex"
    >
      {hasPrevious && (
        <NavigatorPane
          direction="left"
          label={previousLesson.title}
          to={goToLesson(previousLesson.id)}
        />
      )}
      {!hasPrevious && <EmptyPane direction="left" />}
      {hasNext && (
        <NavigatorPane
          direction="right"
          label={nextLesson.title}
          to={goToLesson(nextLesson.id)}
        />
      )}
      {!hasNext && <EmptyPane direction="right" />}
    </Box>
  );
};
