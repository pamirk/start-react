import React from "react";
import {Box, makeStyles, Typography} from "@material-ui/core";
import PlayCircledIcon from "@material-ui/icons/PlayCircleOutline";
import PlayIcon from "@material-ui/icons/PlayArrow";

import Touchable from "../Touchable";
import BorderedBox from "../BorderedBox";

import {Lesson} from "./Model";
import {goToLesson} from "../Constants";
import {useDarkMode} from "../DarkMode";

// import Button from "../Button";
export const useStyles = makeStyles(theme => ({
    container: ({comingSoon}: Lesson) => ({
        display: "flex",
        flex: 1,
        color:
            theme.palette.common[theme.palette.type === "light" ? "black" : "white"],
        "& img": {
            transition: `transform ${theme.transitions.duration.standard}ms`,
            transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        },
        "& .thumbnail": {
            backgroundColor: "transparent",
            transition: `background-color ${theme.transitions.duration.standard}ms`,
            transitionTimingFunction: theme.transitions.easing.easeInOut
        },
        "& .play-button": {
            opacity: 0,
            transition: `opacity ${theme.transitions.duration.standard}ms`,
            transitionTimingFunction: theme.transitions.easing.easeInOut
        },
        "&:hover": {
            cursor: comingSoon ? "default" : "pointer",
            "& .thumbnail": {
                backgroundColor: comingSoon ? "transparent" : theme.palette.grey[100]
            },
            "& img": {
                transform: `scale(${comingSoon ? 1 : 1.15})`,
                transition: "transform 8000ms"
            },
            "& .play-button": {
                opacity: comingSoon ? 0 : 1
            }
        }
    }),
    thumbnail: {
        padding: theme.spacing(),
        height: 200,
        [theme.breakpoints.up("sm")]: {
            height: 290
        }
    },
    lessonNumber: {
        marginLeft: theme.spacing()
    }
}));

interface LessonProps {
    lesson: Lesson;
    index: number;
}

export default ({lesson, index}: LessonProps) => {
    const darkMode = useDarkMode();
    const classes = useStyles(lesson);
    return (
        <Touchable
            to={`${lesson.comingSoon ? "" : goToLesson(lesson.id)}`}
            disableRipple
        >
            <BorderedBox
                textAlign="start"
                display="flex"
                flexDirection={{xs: "column", sm: "row"}}
                className={classes.container}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    flex={1}
                    overflow="hidden"
                    position="relative"
                >
                    <Box className="thumbnail" textAlign="center">
                        <img
                            src={darkMode ? lesson.thumbnailDark : lesson.thumbnail}
                            alt="lesson thumbnail"
                            className={classes.thumbnail}
                        />
                    </Box>
                    <Box
                        position="absolute"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        color="white"
                        fontSize={128}
                        className="play-button"
                    >
                        <PlayIcon color="inherit" fontSize="inherit"/>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    padding={2}
                    flex={1}
                >
                    <Box>
                        <Box
                            color="grey.500"
                            display="flex"
                            alignItems="center"
                            paddingBottom={2}
                        >
                            <PlayCircledIcon color="inherit" fontSize="small"/>
                            <Typography
                                variant="caption"
                                color="inherit"
                                className={classes.lessonNumber}
                            >
                                {`Lesson ${index + 1}`.toUpperCase()}
                            </Typography>
                        </Box>
                        <Typography variant="h4" gutterBottom>
                            {lesson.title}
                        </Typography>
                        <Typography gutterBottom>{lesson.description}</Typography>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        {lesson.comingSoon && (
                            <Typography variant="button">Coming Soon</Typography>
                        )}
                        {!lesson.comingSoon && (
                            <Typography>{`${lesson.duration} minutes video`}</Typography>
                        )}
                    </Box>
                </Box>
            </BorderedBox>
        </Touchable>
    );
};
