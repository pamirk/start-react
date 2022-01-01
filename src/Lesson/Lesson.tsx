import React, { useContext } from "react";
import { Box, Typography } from "@material-ui/core";

import { videos } from "../components/Lessons/Model";
import { GithubContext, PageContainer, VideoPlayer } from "../components";
import withLessonProtection, { LessonProps } from "./withLessonProtection";
import Navigator from "./Navigator";
// import { DoesntHaveGithubAccess, HasGithubAccess } from "../components/Github";
import { getCourse } from "../components/Lessons";
import { Repository } from "../components/GithubContext";

export default withLessonProtection(({ lesson }: LessonProps) => {
  const url = videos[lesson.id];
  const course = getCourse(lesson);
  const repo = `react-native-${course}` as Repository;
  const [repos] = useContext(GithubContext);
  const hasGithubAccess = !!repos[repo];
  return (
    <PageContainer maxWidth="md">
      <VideoPlayer {...{ url }} />
      <Box margin={2} display="flex" flex={1} flexDirection="column">
        <Box marginBottom={2}>
          <Typography variant="h3" gutterBottom>
            {lesson.title}
          </Typography>
          <Typography gutterBottom>{lesson.description}</Typography>
        </Box>
        {lesson.content && lesson.content({})}
        {!lesson.free && (
          <Box marginBottom={2}>
            <Typography variant="h4" gutterBottom>
              Course Material
            </Typography>
            {/*{hasGithubAccess && (
              <HasGithubAccess lesson={lesson.codename} {...{ repo }} />
            )}
            {!hasGithubAccess && <DoesntHaveGithubAccess />}*/}
          </Box>
        )}
      </Box>
      <Navigator {...{ lesson }} />
    </PageContainer>
  );
});
