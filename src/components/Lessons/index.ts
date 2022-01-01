import { Course, Lesson, courses } from "./Model";

export { default } from "./Lessons";

export const lessons = Object.keys(courses)
  .map(id => courses[id as Course])
  .flat();

export const getCourse = (lesson: Lesson) =>
  Object.keys(courses).filter(c =>
    courses[c as Course].find(c2 => c2.id === lesson.id)
  )[0] as Course;
