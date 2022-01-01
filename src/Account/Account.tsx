import React, {useContext, useState} from "react";
import * as firebase from "firebase/app";
import {
    Box,
    Divider,
    Link as MuiLink,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Tab,
    Tabs,
    Typography
} from "@material-ui/core";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import VideoLibrary from "@material-ui/icons/VideoLibrary";

import {Link as RouterLink, RouteComponentProps} from "react-router-dom";

import {Button, PageContainer, Routes} from "../components";
import {UserProps, withProtection} from "../components/AuthContext";
import {GithubContext} from "../components/GithubContext";
// import {DoesntHaveGithubAccess, HasGithubAccess} from "../components/Github";

import Section from "./Section";
import SelectSubscription from "./SelectSubscription";
import ManageSubscription from "./ManageSubscription";
import GithubAccess from "./GithubAccess";

let DoesntHaveGithubAccess = true
const routes: string[] = [Routes.ACCOUNT, Routes.GITHUB];

const a11yProps = (label: string) => ({
    id: `account-${label}`,
    "aria-controls": `account-${label}`
});

const useStyles = makeStyles(() => ({
    email: {
        textOverflow: "ellipsis",
        overflow: "hidden"
    },
    noPaddingTop: {
        paddingTop: 0
    }
}));

interface AccountProps extends UserProps, RouteComponentProps {
}

export default withProtection(({user, location, history}: AccountProps) => {
    const [repos] = useContext(GithubContext);
    const classes = useStyles();
    const {email} = user;
    const tab = routes.indexOf(location.pathname);
    const [loading, setLoading] = useState(false);
    const signOut = async () => {
        setLoading(true);
        firebase.auth().signOut();
    };
    const hasGithubAccess = !!repos["react-native-gestures-and-animations"];
    return (
        <PageContainer>
            <Tabs
                indicatorColor="primary"
                textColor="primary"
                value={tab}
                aria-label="Account Tabs"
                onChange={(_e, index) => history.push(routes[index])}
            >
                <Tab label="Account" {...a11yProps("account")} />
                <Tab label="Github" {...a11yProps("github")} />
            </Tabs>
            <Divider/>
            <Box hidden={tab !== 0}>
                <Section>
                    <Typography variant="h4" className={classes.email}>
                        {email}
                    </Typography>
                </Section>
                {user.accessType === "subscription" && (
                    <Section>
                        <ManageSubscription subscription={user.subscription}/>
                    </Section>
                )}
                {user.access && (
                    <>
                        <Section>
                            <Typography variant="h5" gutterBottom>
                                Declarative Gestures and Animations
                            </Typography>
                           {/* {hasGithubAccess && (
                                <HasGithubAccess repo="react-native-gestures-and-animations"/>
                            )}*/}
                            {/*{!hasGithubAccess && <DoesntHaveGithubAccess/>}*/}
                            <Typography variant="h6" gutterBottom>
                                Links
                            </Typography>
                            <List className={classes.noPaddingTop}>
                                <ListItem
                                    href="https://bit.ly/3cuSqa3"
                                    component={MuiLink}
                                    color="inherit"
                                    button
                                >
                                    <ListItemIcon>
                                        <LibraryBooks/>
                                    </ListItemIcon>
                                    <ListItemText primary="Course Material (with boilerplates)"/>
                                </ListItem>
                                <ListItem component={RouterLink} to={Routes.HOME} button>
                                    <ListItemIcon>
                                        <VideoLibrary/>
                                    </ListItemIcon>
                                    <ListItemText primary="Lessons"/>
                                </ListItem>
                            </List>
                        </Section>
                        <Section>
                            <Typography variant="h5" gutterBottom>
                                Learn Reanimated 2
                            </Typography>
                           {/* {hasGithubAccess && (
                                <HasGithubAccess repo="react-native-gestures-and-animations-2"/>
                            )}*/}
                            {/*{!hasGithubAccess && <DoesntHaveGithubAccess/>}*/}
                            <Typography variant="h6" gutterBottom>
                                Links
                            </Typography>
                            <List className={classes.noPaddingTop}>
                                <ListItem component={RouterLink} to={Routes.REANIMATED2} button>
                                    <ListItemIcon>
                                        <VideoLibrary/>
                                    </ListItemIcon>
                                    <ListItemText primary="Lessons"/>
                                </ListItem>
                            </List>
                        </Section>
                    </>
                )}
                {user.accessType === "none" && (
                    <Section>
                        <SelectSubscription/>
                    </Section>
                )}
                <Section bottom>
                    <Box display="flex">
                        <Box marginRight={1}>
                            <Button href="mailto:wcandillon@gmail.com" {...{loading}}>
                                Contact Support
                            </Button>
                        </Box>
                        <Box>
                            <Button onClick={signOut} {...{loading}}>
                                Sign Out
                            </Button>
                        </Box>
                    </Box>
                </Section>
            </Box>
            <Box hidden={tab !== 1}>
                {user.access ? (
                    <GithubAccess defaultUserName={user.github || ""}/>
                ) : (
                    <Section>
                        <Typography>
                            Github access to the Start React Native repositories is enabled
                            upon subscription.
                        </Typography>
                    </Section>
                )}
            </Box>
        </PageContainer>
    );
});
