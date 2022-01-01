import Touchable from "../components/Touchable";
import YouTubePlayer from "../components/YouTubePlayer";
import BorderedBox from "../components/BorderedBox";
import Link from "../components/Link";
import Button from "../components/Button";
import Loading from "../components/Loading";
import SplitContainer from "../components/SplitContainer";
import {ɸ, Routes, stripeApiKey, subscriptions, goToLesson} from "./Constants";
import {createSession} from "./API";
import {formatPrice, formatDate} from "./Formatters";
import Lessons from "./Lessons/Lessons"
import {loadStripe} from "./Stripe"
import {AuthContext} from "./AuthContext"
import AuthProvider from "./AuthContext"
import GithubProvider from "./GithubContext"
import Snackbar from "./Snackbar"
import PageContainer from "./PageContainer"
import {GithubContext} from "./GithubContext"
import Skeleton from "./Skeleton"
import AppBar from "./AppBar"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"
import VideoPlayer from "./VideoPlayer"
import Error from "./illustrations/Error"
import Animations from "./illustrations/Animations"

export {
    Button, Touchable, YouTubePlayer, BorderedBox, Link, ɸ, Routes, Lessons,
    SplitContainer, Loading, formatPrice, createSession, stripeApiKey, subscriptions, loadStripe,
    AuthContext, Snackbar, formatDate, PageContainer, GithubContext, Skeleton, Animations, Error,goToLesson,VideoPlayer,
    AuthProvider, GithubProvider,AppBar,Footer,ScrollToTop
};
