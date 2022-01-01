/* eslint-disable max-len */
import {GestureAndAnimations2} from "../Model";
import intro from "../../../static/media/firecamp.339939cf.svg";
import transitions from "../../../static/media/the-heart-of-the-matter.affc999c.svg";
import pangesture from "../../../static/media/the-heart-of-the-matter.affc999c.svg";
import circularProgress from "../../../static/media/the-heart-of-the-matter.affc999c.svg";
import graph from "../../../static/media/the-heart-of-the-matter.affc999c.svg";
import {Typography} from "@material-ui/core";
import Pre from "../../Pre";
import React from "react";

const lessons: GestureAndAnimations2[] = [
    {
        id: "heart-of-the-matter",
        title: "The Heart of the Matter",
        description: "Welcome to this course on Declarative Gestures and Animations. In this video, we explore the strategies and APIs that enable us to build gestures and animations as smooth as butter.",
        thumbnail: intro,
        duration: 4,
        free: !0,
        codename: ""
    }, {
        id: "dev-setup",
        title: "Development Setup",
        description: "This lesson contains all the information necessary for your project to be up and running with React Native Gesture Handler and Reanimated. We also reconcile differences between development environment: not using Expo or TypeScript, for instance.",
        thumbnail: intro,
        duration: 3,
        free: !0,
        codename: ""
    }, {
        id: "intro",
        title: "Worklets & Shared Values",
        description: "Reanimated is using animation worklets: JavaScript functions that run on the UI thread to compute animation frames. These worklets have exciting properties and ways to communicate to the main JavaScript thread. Worklets operate with shared values: animation values that are available on both the UI and JS thread.",
        thumbnail: intro,
        duration: 9,
        codename: "Worklets"
    }, {
        id: "pangesture2",
        title: "Pan Gesture",
        description: "In this lesson, we build our first gesture. We drag a card around and make sure that the movements of the card are within the bounds of the container. We also remember the position across different gestures. When the gesture ends, we add some momentum to the card, giving it a feel of being a physical object.",
        thumbnail: intro,
        duration: 14,
        codename: "PanGesture"
    }, {
        id: "transitions2",
        title: "Transitions",
        description: "Transitions are the easiest way to animate React Native components. And in this lesson, we take a look at how this technic looks like with Reanimated 2. Using transitions, we can assign an animation value to a React state change or an animation value change.",
        thumbnail: intro,
        duration: 14,
        codename: "Transitions"
    }, {
        id: "higher-order-animations",
        title: "Higher-order Animations",
        description: "Animations in Reanimated 2 are first-class citizens. They receive other animations as parameters, enabling an incredible level of composability that we are showcasing in this lesson.",
        thumbnail: intro,
        duration: 12,
        content: () => (
            <>
                <Typography variant="h4" gutterBottom>
                    Notes
                </Typography>
                <Typography gutterBottom>
                    This code example from this video has been updated. The type definitions shown in Animation.ts are
                    now available via redash.
                </Typography>
            </>
        )
    }, {
        id: "custom-animations",
        title: "Custom Animations",
        description: "So far, animations have been a black box for us. We've learned how to use and compose them, but we don't know to build them yet. In this lesson, we write custom animations to get familiarized with their internal API.",
        thumbnail: intro,
        duration: 33,
        codename: "Animations"
    }, {
        id: "circularslider",
        title: "Circular Slider",
        description: "In this lesson, we build a circular slider by using easy trigonometry concepts. We learn to smoothly go from the canvas coordinate system to the polar coordinate system back and forth to have the cursor moving around a circle. From there, we use SVG animations to draw the circular progress bar.",
        thumbnail: intro,
        duration: 25,
        codename: "CircularSlider"
    }, {
        id: "graph",
        title: "Graph Interactions",
        description: "In this lesson, we build a user interaction on top of an SVG graph created with the help of D3. Using mathematical tools based on cubic B\xe8zier curves, and having scale functions available both on UI threads, we build a delightful user interaction on our Graph. ",
        thumbnail: intro,
        duration: 23,
        codename: "Graph"
    }, {
        id: "swiping2",
        title: "Swiping",
        description: "To implement a card-swiping interaction, we need to develop a small algorithm to decide where the card should snap based on its velocity and position when releasing the gesture. Finally, we need to properly configure the spring animation to call back into the JavaScript thread once the animation is over.",
        thumbnail: intro,
        duration: 34,
        content: () => (
            <>
                <Typography variant="h4" gutterBottom>
                    Notes
                </Typography>
                <Typography gutterBottom>
                    The trigonometry part is explained a bit further in the video below.
                    <nav><a href='https://youtu.be/m3KqkvqfI48?t=53' target='_blank' color='inherit'>The 5-minute React
                        Native Tinder Swipe</a></nav>
                </Typography>
            </>
        )
    }, {
        id: "dynamic-springs2",
        title: "Dynamic Springs",
        description: "In this lesson, we drive the movement of one item via a Pan gesture. The second item follows the position of the first item with a spring transition to add an effect of inertia. The third item follows the second item in the same manner and so on.",
        thumbnail: intro,
        duration: 5,
        codename: "DynamicSpring"
    }, {
        id: "drag-to-sort2",
        title: "Drag to Sort",
        description: "Ordering lists by dragging its items is a very common use-case in mobile apps. In this lesson, we are building such a user-interaction. It will require us to perfectly orchestrate gesture events and transitions on changes in the order of items.",
        thumbnail: intro,
        duration: 26,
        codename: "DragToSort"
    }, {
        id: "cubic-bezier",
        title: "Cubic B\xe9zier",
        description: "Bezier Curves are an incredibly powerful mathematical tool to build vector drawings. By understanding how Bezier curves work, we will be able to animate them.",
        thumbnail: intro,
        duration: 19,
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
                            target='_blank' color='inherit'>Nerding Out With Bezier Curves</a></nav>
                    <nav><a href='https://pomax.github.io/bezierinfo/' target='_blank' color='inherit'>A Primer on
                        B\xe9zier Curves</a></nav>
                </Typography>
            </>
        )
    }, {
        id: "shape-morphing2",
        title: "Morphing Shapes",
        description: "Thanks to our understanding of Bezier curves, we can interpolate one SVG path to another, thus creating beautiful shape morphing.",
        thumbnail: intro,
        duration: 12,
        content: () => (
            <>
                <Typography variant="h4" gutterBottom>
                    Notes
                </Typography>
                <Typography gutterBottom>
                    This example is based on Cuberto's development lab Rate-It open-source project written in SwiftUI.
                    <nav><a href='https://github.com/Cuberto/rate-it' target='_blank' color='inherit'>Rate-It</a></nav>
                </Typography>
            </>
        )
    }, {
        id: "colors",
        title: "Colors",
        description: "Colors are a pellicular type of animation values. Their representation can be a string or an integer. In this lesson, we learn to go from one color space to the other, encode and decode colors, and interpolate them.",
        thumbnail: intro,
        duration: 0,
        comingSoon: !0
    }]


;

export default lessons;
const x =
    [
        {
            id: "intro",
            title: "Animation Worklets & Shared Values",
            description:
                "When writing gestures and animations with React Native, the key to success is to avoid frame drops. In version 2, we use the notion of worklets: JavaScript functions that run on the UI thread to compute animation frames.  These worklets have interesting properties and ways to communicate to the main JavaScript thread. Worklets operate with shared values: animation values that are available on both the UI and JS thread.",
            thumbnail: intro,
            thumbnailDark: intro,
            duration: 20,
            codename: "Worklets",
            free: true,
        },
        {
            id: "pangesture2",
            title: "Pan Gesture",
            description:
                "In this lesson, we build our first gesture. We drag a card around and make sure that the movements of the card are within the bounds of the container. We also remember the position across different gestures. When the gesture ends, we add some momentum to the card, giving it a feel of being a physical object.",
            thumbnail: pangesture,
            thumbnailDark: pangesture,
            duration: 14,
            codename: "PanGesture",
            free: true,
        },
        {
            id: "transitions2",
            title: "Transitions",
            description:
                "Transitions are the easiest way to animate React Native components. And in this lesson, we take a look at how this technic looks like with Reanimated 2. Using transitions, we can assign an animation value to a React state change or an animation value change.",
            thumbnail: transitions,
            thumbnailDark: transitions,
            duration: 14,
            codename: "Transitions"
        },
        {
            id: "circularslider",
            title: "Circular Slider",
            description:
                "In this lesson, we build a circular slider by using easy trigonometry concepts. We learn to smoothly go from the canvas coordinate system to the polar coordinate system back and forth to have the cursor moving around a circle. From there, we use SVG animations to draw the circular progress bar.",
            thumbnail: circularProgress,
            thumbnailDark: circularProgress,
            duration: 25,
            codename: "CircularSlider"
        },
        {
            id: "graph",
            title: "Graph Interactions",
            description:
                "In this lesson, we build a user interaction on top of an SVG graph created with the help of D3. Using mathematical tools based on cubic Bèzier curves, and having scale functions available both on UI threads, we build a delightful user interaction on our Graph. ",
            thumbnail: graph,
            thumbnailDark: graph,
            duration: 23,
            codename: "Graph"
        }
    ]


