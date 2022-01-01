/* eslint-disable max-len */
// import d3 from "./d3.svg";
// import d3Dark from "./d3-dark.svg";
// import darkMode from "./dark-mode.svg";
// import color from "./color.svg";
// import colorDark from "./color-dark.svg";
// import tap from "./tap-gesture.svg";
// import tapDark from "./tap-gesture-dark.svg";
// import memoization from "./memoization.svg";
// import memoizationDark from "./memoization-dark.svg";
// import sharedTransition from "./shared-transition.svg";
// import sharedTransitionDark from "./shared-transition-dark.svg";
import React from "react";
import {
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@material-ui/core";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import VideoLibrary from "@material-ui/icons/VideoLibrary";

import intro from "../../../static/media/the-heart-of-the-matter.affc999c.svg";
import developmentSetup from "../../../static/media/development-setup.230f6c81.svg";
import transitions from "../../../static/media/transitions2.2ce3f486.svg";
import useTransition from "../../../static/media/useTransition.72dc5056.svg";
import timing from "../../../static/media/timing.e475c2d5.svg";
import panGesture from "../../../static/media/pan-gesture2.0d468c09.svg";
import decay from "../../../static/media/decay.f91981dd.svg";
import spring from "../../../static/media/spring.3a57f9d1.svg";
import swiping from "../../../static/media/swiping.ac3a9beb.svg";
import svg from "../../../static/media/svg.0ca041e9.svg";
import advancedTransformations from "../../../static/media/advanced-transformations.svg";
import dynamicSprings from "../../../static/media/dynamic-springs.049d317d.svg";
import dragToSort from "../../../static/media/drag-to-sort.dd242f66.svg";
import trigonometry from "../../../static/media/trigonometry.fd22bbf3.svg";
import bezier from "../../../static/media/bezier.cf299579.svg";
import circularProgress from "../../../static/media/circular-progress.52eba7ba.svg";
import shapeMorphing from "../../../static/media/shape-morphing.2700e9b3.svg";
import pinch from "../../../static/media/pinch.84b5901a.svg";
import { GestureAndAnimations } from "../Model";
import Pre from "../../Pre";

const lessons: GestureAndAnimations[] = [
    {
        id: "the-heart-of-the-matter",
        title: "The Heart of the Matter",
        description: "Welcome to this course on Declarative Gestures and Animations. In this video, we explore the strategies and APIs that enable us to build gestures and animations as smooth as butter.",
        thumbnail: intro,
        duration: 10,
        free: !0,
        codename: ""
    }, {
        id: "development-setup",
        title: "Development Setup",
        description: "This lesson contains all the information necessary for your project to be up and running with React Native Gesture Handler and Reanimated. We also reconcile differences between development environment: not using Expo or TypeScript, for instance.",
        thumbnail: developmentSetup,
        duration: 9,
        free: !0,
        codename: ""
    }, {
        id: "value-clocks-and-identity",
        title: "Values, Clocks, and their Identities",
        description: "To declare gestures and animations on the UI from JavaScript, Reanimated provides interesting concepts that we will introduce in this lesson.",
        thumbnail: advancedTransformations,
        duration: 25,
        codename: "ClockValuesAndIdentities",
        content: () => (
            <>
                <Typography variant="h4" gutterBottom>
                    Notes
                </Typography>
                <Typography gutterBottom>
                    This video was recorded with a version of redash that has a different
                    redash. The syntax for
                    <Pre>useValue([0, 0, 1])</Pre>
                    is now
                    <Pre>useValue([0, 0, 1])</Pre>
                    (no array).
                </Typography>
            </>
        )
    }, {
        id: "transitions",
        title: "Transitions",
        description: "Transitions are the easiest way to animate components with React Native. In this lesson, we build three different layouts and declare a state that enables us to switch from one design to the other. From there, we set up a simple transition that animates between each state.",
        thumbnail: transitions,
        duration: 10,
        codename: "Transitions"
    }, {
        id: "useTransition",
        title: "useTransition",
        description: "useTransition is a utility function that provides an animation value linked to a transition. This value enables you to animate properties that are not supported by the transition API otherwise.",
        thumbnail: useTransition,
        duration: 14,
        codename: "UseTransition"
    }, {
        id: "timing",
        title: "Timing",
        description: "Harnessing the power of clocks in Reanimated is the key to success to build incredible animations that can seamlessly interoperate with sophisticated gestures. To get started, we build a simple timing function that can be looped, interrupted, and restarted.",
        thumbnail: timing,
        duration: 22,
        codename: "Timing"
    }, {
        id: "pan-gesture",
        title: "Pan Gesture",
        description: "In this lesson, we build our first gesture using Gesture Handler. We drag a card around and make sure that we remember its position when releasing the gesture as well as the bounds of its movements within its parent container.",
        thumbnail: panGesture,
        duration: 15,
        codename: "PanGesture"
    }, {
        id: "decay",
        title: "Decay",
        description: "For the card dragging to feel more natural, we add a decay animation when releasing the gesture. Such animation needs to be nicely interruptible so that when the user drags the card while the decay animation is running the experience feels seamless.",
        duration: 11,
        thumbnail: decay,
        codename: "Decay"
    }, {
        id: "spring",
        title: "Spring",
        description: "Spring animations are the second type of physic based animation available in Reanimated. Once the user releases the gesture, we snap the card back to a specific position. As always, the animation is fully interruptible.",
        duration: 6,
        thumbnail: spring,
        codename: "Spring"
    }, {
        id: "swiping",
        title: "Swiping",
        description: "To implement a card-swiping interaction, we need to develop a small algorithm to decide where the card should snap based on its velocity and position when releasing the gesture. Finally, we need to properly configure the spring animation to call back into the JavaScript thread once the animation is over.",
        duration: 41,
        thumbnail: swiping,
        codename: "Swiping"
    }, {
        id: "dynamic-springs",
        title: "Dynamic Springs",
        description: "So far, our animations were following the same flow: the gesture drives the animation, and once it's over, we start a clock that triggers a spring or a decay. In this lesson, we do something a bit more dynamic. For each frame, we use the spring function to set the position of our elements. These dynamic animations are the key to sophisticated physics-based animations.",
        duration: 12,
        thumbnail: dynamicSprings,
        codename: "DynamicSpring"
    }, {
        id: "drag-to-sort",
        title: "Drag to Sort",
        description: "Ordering lists by dragging its items is a very common use-case in mobile apps. Thankfully, by using all the concepts we learned so far, it is a relatively simple user interaction to build.",
        duration: 30,
        thumbnail: dragToSort,
        codename: "DragToSort"
    }, {
        id: "pinch-gesture",
        title: "Pinch Gesture",
        description: "The Pinch gesture handler is useful to zoom on things. It can also help build other sophisticated gestures. Harnessing this gesture has its challenges. Scale transformations are multiplicative, not additive, which requires us to slightly change the way we think about these animations values. On top of that, we will be careful to provide a consistent user experience on both iOS and Android.",
        thumbnail: pinch,
        duration: 52,
        codename: "PinchGesture"
    }, {
        id: "svg",
        title: "SVG Animations",
        description: "React Native SVG integrates seamlessly with Gesture Handler and Reanimated. In this lesson, we build a simple user interaction using these three modules.",
        duration: 17,
        thumbnail: svg,
        codename: "Svg"
    }, {
        id: "trigonometry",
        title: "Trigonometry",
        description: "In this lesson, we use basic trigonometry concepts to build the activity rings from iOS.",
        duration: 22,
        thumbnail: trigonometry,
        codename: "Trigonometry"
    }, {
        id: "circular-slider",
        title: "Circular Slider",
        description: "In this lesson, we take advantage of all the SVG and trigonometry concepts we learned to build a circular slider. This example will lead us in learning more advanced trigonometry concepts.",
        thumbnail: circularProgress,
        duration: 37,
        codename: "CircularSlider",
        content: () => (
            <>
                <Typography variant="h4" gutterBottom>
                    Notes
                </Typography>
                <Typography gutterBottom>
                    In this video, we build on our circular progress bar using SVG, but we also feature a similar
                    progress bar that is built with SVG. How to create such a progress bar is described in the video
                    link below. The SVG progress bar has the advantage of being more flexible and can be transparent.
                    The non-SVG implementation has better performance as it relies only on animating properties that can
                    be GPU-accelerated.
                    <nav><a href='https://www.youtube.com/watch?v=K6X9Xcy6oio'
                            rel='noopener noreferrer'
                            target='_blank' color='inherit'>Without
                        SVG: Circular Progress Bar</a></nav>
                </Typography>
            </>
        )
    }, {
        id: "bezier",
        title: "Bezier Curves",
        description: "Bezier Curves are an incredibly powerful mathematical tool to build vector drawings. By understanding how Bezier curves work, we will be able to animate them.",
        thumbnail: bezier,
        duration: 27,
        codename: "BezierCurves",
        content: () => (
            <>
                <Typography variant="h4" gutterBottom>
                    Notes
                </Typography>
                <Typography gutterBottom>
                    B\xe9zier Curves are fun and powerful. Below are two go-to resources on that topic. The first link
                    is a beginner introduction and assumes zero knowledge on that topic. The second link is an
                    exhaustive documentation that includes pretty much everything there is to know about this topic.
                    <nav><a href='https://www.freecodecamp.org/news/nerding-out-with-bezier-curves-6e3c0bc48e2f/'
                            rel='noopener noreferrer'
                            target='_blank' color='inherit'>Nerding Out With Bezier Curves</a></nav>
                    <nav><a href='https://pomax.github.io/bezierinfo/'
                            rel='noopener noreferrer'
                            target='_blank' color='inherit'>A Primer on
                        B\xe9zier Curves</a></nav>
                </Typography>
            </>
        )
    }, {
        id: "shape-morphing",
        title: "Shape Morphing",
        description: "Thanks to our understanding of Bezier curves, we can interpolate one SVG path to another, thus creating beautiful shape morphing.",
        thumbnail: shapeMorphing,
        duration: 31,
        codename: "PathMorphing"
    }]

    /*[
  {
    id: "the-heart-of-the-matter",
    title: "The Heart of the Matter",
    description:
      "Welcome to this course on Declarative Gestures and Animations. In this video, we explore the strategies and APIs that enable us to build gestures and animations as smooth as butter.",
    thumbnail: intro,
    thumbnailDark: introDark,
    duration: 10,
    free: true,
    codename: ""
  },
  {
    id: "development-setup",
    title: "Development Setup",
    description:
      "This lesson contains all the information necessary for your project to be up and running with React Native Gesture Handler and Reanimated. We also reconcile differences between development environment: not using Expo or TypeScript, for instance.",
    thumbnail: developmentSetup,
    thumbnailDark: developmentSetupDark,
    duration: 9,
    free: true,
    codename: ""
  },
  {
    id: "value-clocks-and-identity",
    title: "Values, Clocks, and their Identities",
    description:
      "To declare gestures and animations on the UI from JavaScript, Reanimated provides interesting concepts that we will introduce in this lesson.",
    thumbnail: advancedTransformations,
    thumbnailDark: advancedTransformationsDark,
    duration: 25,
    codename: "ClockValuesAndIdentities",
    content: () => (
      <>
        <Typography variant="h4" gutterBottom>
          Notes
        </Typography>
        <Typography gutterBottom>
          This video was recorded with a version of redash that has a different
          redash. The syntax for
          <Pre>useValue([0, 0, 1])</Pre>
          is now
          <Pre>useValue([0, 0, 1])</Pre>
          (no array).
        </Typography>
      </>
    )
  },
  {
    id: "transitions",
    title: "Transitions",
    description:
      "Transitions are the easiest way to animate components with React Native. In this lesson, we build three different layouts and declare a state that enables us to switch from one design to the other. From there, we set up a simple transition that animates between each state.",
    thumbnail: transitions,
    thumbnailDark: transitionsDark,
    duration: 10,
    codename: "Transitions"
  },
  {
    id: "useTransition",
    title: "useTransition",
    description:
      "useTransition is a utility function that provides an animation value linked to a transition. This value enables you to animate properties that are not supported by the transition API otherwise.",
    thumbnail: useTransition,
    thumbnailDark: useTransitionDark,
    duration: 14,
    codename: "UseTransition"
  },
  {
    id: "timing",
    title: "Timing",
    description:
      "Harnessing the power of clocks in Reanimated is the key to success to build incredible animations that can seamlessly interoperate with sophisticated gestures. To get started, we build a simple timing function that can be looped, interrupted, and restarted.",
    thumbnail: timing,
    thumbnailDark: timingDark,
    duration: 22,
    codename: "Timing"
  },
  {
    id: "pan-gesture",
    title: "Pan Gesture",
    description:
      "In this lesson, we build our first gesture using Gesture Handler. We drag a card around and make sure that we remember its position when releasing the gesture as well as the bounds of its movements within its parent container.",
    thumbnail: panGesture,
    thumbnailDark: panGestureDark,
    duration: 15,
    codename: "PanGesture"
  },
  {
    id: "decay",
    title: "Decay",
    description:
      "For the card dragging to feel more natural, we add a decay animation when releasing the gesture. Such animation needs to be nicely interruptible so that when the user drags the card while the decay animation is running the experience feels seamless.",
    duration: 11,
    thumbnail: decay,
    thumbnailDark: decayDark,
    codename: "Decay"
  },
  {
    id: "spring",
    title: "Spring",
    description:
      "Spring animations are the second type of physic based animation available in Reanimated. Once the user releases the gesture, we snap the card back to a specific position. As always, the animation is fully interruptible.",
    duration: 6,
    thumbnail: spring,
    thumbnailDark: springDark,
    codename: "Spring"
  },
  {
    id: "swiping",
    title: "Swiping",
    description:
      "To implement a card-swiping interaction, we need to develop a small algorithm to decide where the card should snap based on its velocity and position when releasing the gesture. Finally, we need to properly configure the spring animation to call back into the JavaScript thread once the animation is over.",
    duration: 41,
    thumbnail: swiping,
    thumbnailDark: swipingDark,
    codename: "Swiping"
  },
  {
    id: "dynamic-springs",
    title: "Dynamic Springs",
    description:
      "So far, our animations were following the same flow: the gesture drives the animation, and once it's over, we start a clock that triggers a spring or a decay. In this lesson, we do something a bit more dynamic. For each frame, we use the spring function to set the position of our elements. These dynamic animations are the key to sophisticated physics-based animations.",
    duration: 12,
    thumbnail: dynamicSprings,
    thumbnailDark: dynamicSpringsDark,
    codename: "DynamicSpring"
  },
  {
    id: "drag-to-sort",
    title: "Drag to Sort",
    description:
      "Ordering lists by dragging its items is a very common use-case in mobile apps. Thankfully, by using all the concepts we learned so far, it is a relatively simple user interaction to build.",
    duration: 30,
    thumbnail: dragToSort,
    thumbnailDark: dragToSortDark,
    codename: "DragToSort"
  },
  {
    id: "pinch-gesture",
    title: "Pinch Gesture",
    description:
      "The Pinch gesture handler is useful to zoom on things. It can also help build other sophisticated gestures. Harnessing this gesture has its challenges. Scale transformations are multiplicative, not additive, which requires us to slightly change the way we think about these animations values. On top of that, we will be careful to provide a consistent user experience on both iOS and Android.",
    thumbnail: pinch,
    thumbnailDark: pinchDark,
    duration: 52,
    codename: "PinchGesture"
  },
  {
    id: "svg",
    title: "SVG Animations",
    description:
      "React Native SVG integrates seamlessly with Gesture Handler and Reanimated. In this lesson, we build a simple user interaction using these three modules.",
    duration: 17,
    thumbnail: svg,
    thumbnailDark: svgDark,
    codename: "Svg"
  },
  {
    id: "trigonometry",
    title: "Trigonometry",
    description:
      "In this lesson, we use basic trigonometry concepts to build the activity rings from iOS.",
    duration: 22,
    thumbnail: trigonometry,
    thumbnailDark: trigonometryDark,
    codename: "Trigonometry"
  },
  {
    id: "circular-slider",
    title: "Circular Slider",
    description:
      "In this lesson, we take advantage of all the SVG and trigonometry concepts we learned to build a circular slider. This example will lead us in learning more advanced trigonometry concepts.",
    thumbnail: circularProgress,
    thumbnailDark: circularProgressDark,
    duration: 37,
    codename: "CircularSlider",
    content: () => (
      <>
        <Typography variant="h4" gutterBottom>
          Notes
        </Typography>
        <Typography gutterBottom>
          In this video, we build on our circular progress bar using SVG, but we
          also feature a similar progress bar that is built with SVG. How to
          create such a progress bar is described in the video link below. The
          SVG progress bar has the advantage of being more flexible and can be
          transparent. The non-SVG implementation has better performance as it
          relies only on animating properties that can be GPU-accelerated.
        </Typography>
        <List component="nav">
          <ListItem
            component={Link}
            href="https://www.youtube.com/watch?v=K6X9Xcy6oio"
            target="_blank"
            color="inherit"
            button
          >
            <ListItemIcon>
              <VideoLibrary />
            </ListItemIcon>
            <ListItemText primary="Without SVG: Circular Progress Bar" />
          </ListItem>
        </List>
      </>
    )
  },
  {
    id: "bezier",
    title: "Bezier Curves",
    description:
      "Bezier Curves are an incredibly powerful mathematical tool to build vector drawings. By understanding how Bezier curves work, we will be able to animate them.",
    thumbnail: bezier,
    thumbnailDark: bezierDark,
    duration: 27,
    codename: "BezierCurves",
    content: () => (
      <>
        <Typography variant="h4" gutterBottom>
          Notes
        </Typography>
        <Typography gutterBottom>
          Bézier Curves are fun and powerful. Below are two go-to resources on
          that topic. The first link is a beginner introduction and assumes zero
          knowledge on that topic. The second link is an exhaustive
          documentation that includes pretty much everything there is to know
          about this topic.
        </Typography>
        <List component="nav">
          <ListItem
            component={Link}
            href="https://www.freecodecamp.org/news/nerding-out-with-bezier-curves-6e3c0bc48e2f/"
            target="_blank"
            color="inherit"
            button
          >
            <ListItemIcon>
              <LibraryBooks />
            </ListItemIcon>
            <ListItemText primary="Nerding Out With Bezier Curves" />
          </ListItem>
          <ListItem
            component={Link}
            href="https://pomax.github.io/bezierinfo/"
            target="_blank"
            color="inherit"
            button
          >
            <ListItemIcon>
              <LibraryBooks />
            </ListItemIcon>
            <ListItemText primary="A Primer on Bézier Curves" />
          </ListItem>
        </List>
      </>
    )
  },
  {
    id: "shape-morphing",
    title: "Shape Morphing",
    description:
      "Thanks to our understanding of Bezier curves, we can interpolate one SVG path to another, thus creating beautiful shape morphing.",
    thumbnail: shapeMorphing,
    thumbnailDark: shapeMorphingDark,
    duration: 31,
    codename: "PathMorphing"
  }
]*/;

export default lessons;

/*
 {
    id: "dark-mode",
    title: "Dark Mode",
    description:
      "A great use case for transitions is the dark mode. With the transition API, we can smoothly fade in and out light and dark elements accordingly.",
    thumbnail: darkMode,
    thumbnailDark: darkMode,
    duration: 8,
    codename: "DarkMode"
  },
{
    id: "d3",
    title: "D3 Interactions",
    description:
      "D3 offers remarkable capabilities that can seamlessly integrate with React Native. In this lesson, we will learn how to leverage some of them to build an interactive graph.",
    thumbnail: d3,
    thumbnailDark: d3Dark,
    duration: 0,
    comingSoon: true
  },
  {
    id: "color-interpolation",
    title: "Color Interpolations",
    description:
      "Colors are a special kind of animation values. In this lesson, we will learn how to process them in order to smoothly animate color properties.",
    thumbnail: color,
    thumbnailDark: colorDark,
    duration: 0,
    comingSoon: true
  },
  {
    id: "memoization",
    title: "Memoization",
    description:
      "The leitmotif of this course is to declare gestures and animations on the UI thread to not depend on  1; crossing the React Native bridge during user interactions and 2; keep the JavaScript thread free to process other tasks such as backend calls. In this lesson, we will discuss practical ways to implement this principle. We want to declare things only once, and declare them even before the first rendering of a component.",
    thumbnail: memoization,
    thumbnailDark: memoizationDark,
    duration: 0,
    comingSoon: true
  },
  {
    id: "sharedTransitions",
    title: "Shared Transitions",
    description:
      "Shared transitions are now expected part of the baseline user experience of a mobile app. In this lesson, we will explore the excellent primitive React Native has to build such a delightful transition.",
    thumbnail: sharedTransition,
    thumbnailDark: sharedTransitionDark,
    duration: 0,
    comingSoon: true
  },
  {
    id: "tap",
    title: "Tap Gesture",
    description:
      "The Tap Gesture Handler enables us to process user's taps without crossing the React Native bridge. In this lesson, we use this property to develop a tap animation that will delight users.",
    thumbnail: tap,
    thumbnailDark: tapDark,
    duration: 0,
    comingSoon: true
  } */
