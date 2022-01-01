import React, { useContext } from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";

import PageNotFound from "../PageNotFound";
import { Lesson, videos } from "../components/Lessons/Model";
import { lessons } from "../components/Lessons";

import {
  AuthContext,
  UNAUTHENTICATED,
  UNDETERMINED
} from "../components/AuthContext";
import { Loading, Routes } from "../components";

export interface LessonProps {
  lesson: Lesson;
}

export default (Comp: (props: LessonProps) => JSX.Element) => ({
  match
}: RouteComponentProps<{ id: keyof typeof videos }>) => {
  const [user] = useContext(AuthContext);
  const {
    params: { id }
  } = match;
  const lesson = lessons.find(l => l.id === id);
  if (!lesson) {
    return <PageNotFound />;
  }
  if (lesson.free) {
    return <Comp {...{ lesson }} />;
  }
  if (user === UNDETERMINED) {
    return <Loading />;
  }
  if (user === UNAUTHENTICATED) {
    return <Redirect to={Routes.SIGN_IN} />;
  }
  /*if (user && !user.access) {
    return <Redirect to={Routes.ACCOUNT} />;
  }*/
  return <Comp {...{ lesson }} />;
};
