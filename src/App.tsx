import React, {useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ThemeProvider} from "@material-ui/styles";
import {Box, CssBaseline, createMuiTheme, responsiveFontSizes} from "@material-ui/core";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions";
import Home from "./Home/Home";
import Auth from "./Auth/Auth";
import SignIn, {EmailSent} from "./SignIn";
import YouTubeFriends from "./WomenOfReact/WomenOfReact";
import Account from "./Account/Account";
import Lesson from "./Lesson";
import PageNotFound from "./PageNotFound";
import Support from "./Support/Support";
import Reanimated2 from "./Reanimated2/Reanimated2";
import {AppBar, AuthProvider, Footer, GithubProvider, Routes, ScrollToTop} from "./components";
import About from "./About/About";
import Contact from "./About/Contact";
import Progress from "./About/Progress";
import FAQ from "./About/FAQ";
import Learning from "./About/Learning";
import Terms from "./About/Terms";
import TermsIntro from "./About/TermsIntro";
import TermsUse from "./About/TermsUse";
import TermsRegistration from "./About/TermsRegistration";

const config = {
    apiKey: "AIzaSyCOjo2zvkh-FzNo-WpFPiafpbIlSkYjuHM",
    authDomain: "start-react-native.firebaseapp.com",
    databaseURL: "https://start-react-native.firebaseio.com",
    projectId: "start-react-native",
    storageBucket: "start-react-native.appspot.com",
    messagingSenderId: "863664398389",
    appId: "1:863664398389:web:d5ac7c9e529b228e"
};
firebase.initializeApp(config);
const black = "#3e3e54";
// const query = matchMedia("(prefers-color-scheme: dark)");

export default () => {
    const [darkMode] = useState(false); // query.matches
    const type = darkMode ? "dark" : "light";
    /*
    useEffect(() => {
      const listener = (e: ) => setDarkMode(e.matches);
      query.addListener(listener);MediaQueryListEvent
      return () => query.removeListener(listener);
    });
    */
    const theme = createMuiTheme({
        palette: {
            type,
            text: {
                primary: darkMode ? "#fff" : black
            },
            primary: {
                main: "#3884ff"
            },
            secondary: {
                main: "#FF6584"
            },
            common: {
                black
            },
            background: {
                default: darkMode ? black : "#fff"
            },
            grey: {
                100: darkMode ? "#5e5e80" : "#f5f5f5"
            }
        },
        shape: {
            borderRadius: 8
        },
        typography: {
            fontFamily: [
                "Rubik",
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"'
            ].join(","),
            button: {
                textTransform: "none"
            },
            overline: {
                textTransform: "none",
                fontSize: "0.9rem",
                lineHeight: 1,
                fontFamily: ["SourceCodePro", "monospace"].join(", ")
            }
        },
        overrides: {
            MuiOutlinedInput: {
                input: {
                    paddingTop: 8.5,
                    paddingBottom: 8.5
                }
            }
        }
    });
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <ThemeProvider theme={responsiveFontSizes(theme)}>
                <CssBaseline/>
                <AuthProvider>
                    <GithubProvider>
                        <BrowserRouter>
                            <ScrollToTop/>
                            <AppBar/>
                            <Switch>
                                <Route path={Routes.HOME} exact component={Home}/>
                                <Route path={Routes.REANIMATED2} exact component={Reanimated2}/>
                                <Route path={Routes.AUTH} exact component={Auth}/>
                                <Route path={Routes.SIGN_IN} exact component={SignIn}/>
                                <Route path={Routes.YOUTUBE_FRIENDS} exact component={YouTubeFriends}/>
                                <Route path={Routes.EMAIL_SENT} exact component={EmailSent}/>
                                <Route path={Routes.ACCOUNT} component={Account}/>
                                <Route path={Routes.LESSON} exact component={Lesson}/>
                                <Route path={Routes.SUPPORT} exact component={Support}/>
                                <Route path={'/about'} exact component={About}/>
                                <Route path={'/contact'} exact component={Contact}/>
                                <Route path={'/progress'} exact component={Progress}/>
                                <Route path={'/faq'} exact component={FAQ}/>
                                <Route path={'/learning'} exact component={Learning}/>
                                <Route path={'/terms'} exact component={Terms}/>
                                <Route path={'/terms-intro'} exact component={TermsIntro}/>
                                <Route path={'/terms-use'} exact component={TermsUse}/>
                                <Route path={'/terms-registration'} exact component={TermsRegistration}/>
                                <Route component={PageNotFound}/>
                            </Switch>
                            <Footer/>
                        </BrowserRouter>
                    </GithubProvider>
                </AuthProvider>
            </ThemeProvider>
        </Box>
    );
};
