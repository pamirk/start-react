import {FC} from "react";
import lessons1 from "./gestures-and-animations";
import lessons2 from "./gestures-and-animations-2";

const v1 = {
    "the-heart-of-the-matter": "8r1mcb5etl",
    "development-setup": "tqtgyhuisg",
    "value-clocks-and-identity": "onp3cs3w45",
    transitions: "ibde7mgj32",
    useTransition: "hwitr31ipk",
    "dark-mode": "384kmkm1pa",
    timing: "u1syhpu3uc",
    "pan-gesture": "11n7iehbhg",
    decay: "uvb17fg8rn",
    spring: "bdi8okw6n0",
    swiping: "9jqrwz8jhf",
    "dynamic-springs": "qysmp3dpj5",
    "drag-to-sort": "tqy6676z1z",
    svg: "ozqi96cpv7",
    trigonometry: "kspbzxix1r",
    "circular-slider": "4hdd6sehva",
    bezier: "gf29187x08",
    "shape-morphing": "2l2mq17ty4",
    d3: "",
    "color-interpolation": "",
    "pinch-gesture": "eu7yjb5vlf",
    tap: "",
    memoization: "",
    sharedTransitions: ""
};

type V2Lessons =
    | "intro"
    | "transitions2"
    | "pangesture2"
    | "circularslider"
    | "dev-setup"
    | "heart-of-the-matter"
    | "higher-order-animations"
    | "custom-animations"
    | "dynamic-springs2"
    | "drag-to-sort2"
    | "cubic-bezier"
    | "shape-morphing2"
    | "swiping2"
    | "colors"
    | "graph";

const v2: Record<Exclude<V2Lessons, keyof typeof v1>, string> = {
    /* intro: "a2i4a8452y",
     transitions2: "ea0kxwmxq6",
     pangesture2: "7nw9hbf5em",
     circularslider: "tan1n7f195",
     graph: "97bu07vo0e",*/
    "dev-setup": "lf4dnbqfzi",
    "heart-of-the-matter": "w",
    intro: "0kx9speuhw",
    transitions2: "ea0kxwmxq6",
    pangesture2: "7nw9hbf5em",
    "higher-order-animations": "rtt22zcqdh",
    "custom-animations": "kkfuy8q65u",
    circularslider: "tan1n7f195",
    graph: "97bu07vo0e",
    "dynamic-springs2": "c7hqn7nfks",
    "drag-to-sort2": "t191bgltgp",
    "cubic-bezier": "d6440q79zv",
    "shape-morphing2": "yj195v0syz",
    swiping2: "n0c7dq4as3",
    colors: ""


};

export const videos = {
    ...v1,
    ...v2
};

export interface Lesson {
    id: keyof typeof videos;
    title: string;
    description: string;
    duration: number;
    thumbnail: string;
    thumbnailDark?: string;
    comingSoon?: boolean;
    free?: boolean;
    content?: FC;
    codename?: string;
}

export interface GestureAndAnimations extends Lesson {
    id: keyof typeof v1;
}

export interface GestureAndAnimations2 extends Lesson {
    id: keyof typeof v2;
}

export const courses = {
    "gestures-and-animations": lessons1 as Lesson[],
    "gestures-and-animations-2": lessons2 as Lesson[]
};

export type Course = keyof typeof courses;
