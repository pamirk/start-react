/* eslint-disable max-len */
import React from "react";
import {Box, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    container: {
        height: "61%",
        width: "61%"
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <Box >
            <img width={'100%'}
                 height={'100%'}
                  src={'https://designcode.io/images/mockups/mockup3-bg.svg'}/>
        </Box>

    )
    /*  return (
        <svg
          width={879}
          height={740}
          className={classes.container}
          viewBox="0 0 879 740">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__a">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#F5F5F5" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="none" fillRule="evenodd">
            <path
              d="M698.65 344.11a412.25 412.25 0 01-6.18-56.71c-1.362-32.102-22.765-59.88-53.46-69.38-5.46-1.68-11.47-3.25-18.11-4.66-58.2-12.36-75.88-1.57-77.89-.15a74.63 74.63 0 01-4.43-9.61c-.1-.34-.19-.68-.29-1a74.51 74.51 0 0019.91-44.89c9.71-9.84 15.38-21.72 15.38-34.51 0-11-4.2-21.32-11.55-30.25V75.57A75.57 75.57 0 00486.46 0h-6.13a75.57 75.57 0 00-75.57 75.57V94.3c-6.67 8.61-10.45 18.44-10.45 28.88 0 12.52 5.44 24.16 14.78 33.88a74.52 74.52 0 0020.74 46.34c.41 2.84.83 5.89 1.24 9.11l-104.1 21.99s-40.14 1.65-66 55c-21.87 45.19-65.39 161.29-78.28 195.85-2.33 6.26-3.65 9.85-3.65 9.85s.43-.43 1.24-1.17l-1.24 3.37s.63-.64 1.83-1.69c-1.82 14.46-2.08 39.29 16.86 42.38 15.88 2.59 56.8 3.66 87.71 4.09h2.14c20.49.27 36.08.27 36.08.27v-.27H656.1v-3.41a22.91 22.91 0 00-1.83-9l.46-.56a18.25 18.25 0 013.45 8 8 8 0 01-.16.84l.2-.51a8.56 8.56 0 01-.2 2.71s42.65-109.89 42.19-175.51c.122-6.91-.4-13.817-1.56-20.63zM432.8 227.36a76.25 76.25 0 01-1.06-9.48v-.09c.37 3.09.73 6.29 1.06 9.57zM303.58 463.4v26.19l-16.4 3.51 16.4-29.7z"
              fill="url(#prefix__a)"
              fillRule="nonzero"
            />
            <path
              d="M481.71 10.57c41.736 0 75.57 33.834 75.57 75.57v32.24H406.14V86.14c0-41.736 33.834-75.57 75.57-75.57z"
              fill="#FF6584"
            />
            <ellipse fill="#FF6584" cx={482.24} cy={128.95} rx={86.14} ry={59.19} />
            <path
              d="M427.02 186.29s18 94.07 0 119.44c-18 25.37 55 35.41 55 35.41l75.56-27.48 10.57-67.65s-46-25.9-36.47-78.22l-104.66 18.5z"
              fill="#FBBEBE"
            />
            <path
              d="M650.04 503.39S654.8 524 628.9 527.7a146.45 146.45 0 01-46.08-.55l-5.71-51.77h60.25l12.68 28.01z"
              fill="#F7C4A7"
            />
            <path
              d="M192.7 477.01s-11.44 46.49 14.46 50.69c25.9 4.2 121 4.23 121 4.23v-55l-43.06 9.2-40.42-38.76-51.98 29.64z"
              fill="#FBBEBE"
            />
            <path
              d="M432.58 216.68l-101.21 21.4s-38.58 1.59-63.42 52.85c-24.84 51.26-78.75 197.66-78.75 197.66s46-46.51 99.89 3.17l35.94-65-7.93 103.06h278.48v-48.63s58.13 31.18 53.91 48.62c0 0 49.75-128.18 39-186.43a396.18 396.18 0 01-5.94-54.5c-1.3-30.854-21.876-57.551-51.38-66.67-5.24-1.61-11-3.12-17.4-4.47-59.72-12.68-75 0-75 0s-11.57 37.64-11.36 54.7c.26 21.93-31.18 36.47-31.18 36.47s-46.51-11.1-48.62-20.08c-2.11-8.98-18.75-61.58-15.03-72.15z"
              fill="#000"
              opacity={0.1}
            />
            <path
              d="M432.58 214.57l-101.21 21.4s-38.58 1.59-63.42 52.85c-24.84 51.26-78.76 197.68-78.76 197.68s46-46.51 99.89 3.17l35.94-65-7.93 103.03h278.49v-48.62s58.13 31.18 53.91 48.62c0 0 49.75-128.18 39-186.43a396.18 396.18 0 01-5.94-54.5c-1.3-30.854-21.876-57.551-51.38-66.67-5.24-1.61-11-3.12-17.4-4.47-59.72-12.68-75 0-75 0s-11.57 37.64-11.36 54.7c.26 21.93-31.18 36.47-31.18 36.47s-46.51-11.1-48.62-20.08c-2.11-8.98-18.75-61.58-15.03-72.15z"
              fill="#3884FF"
            />
            <path
              d="M536 210.08a71.53 71.53 0 01-2.76-37.52l-104.66 18.49s1.51 7.91 3.22 19.76a71.86 71.86 0 00104.18-.73h.02z"
              fill="#000"
              opacity={0.1}
            />
            <path
              d="M553.85 156.17c-.17 39.237-31.775 71.087-71.01 71.562-39.233.475-71.6-30.601-72.72-69.822v-1.74a71.89 71.89 0 0140.29-64.59 71.49 71.49 0 016.64-2.84 72.39 72.39 0 0137-3.44c32.774 5.58 57.434 32.926 59.61 66.1.127 1.58.19 3.17.19 4.77z"
              fill="#FBBEBE"
            />
            <g opacity={0.1} fill="#000">
              <path d="M456.94 90.43l.1-.06a71.49 71.49 0 00-6.64 2.84 71.89 71.89 0 00-40.29 64.59v1.74a16 16 0 006.45-1.55c17.52-8.18 28-33.2 32.16-50.65 1.5-6.25 2.91-13.29 8.22-16.91z" />
              <path d="M511.95 92.44a71.28 71.28 0 00-17.87-5.51 23.06 23.06 0 0112.83 8.06 32.86 32.86 0 013.93 7 72.07 72.07 0 00-60.45 1.25c4.51 9.89 18.5 15.28 27.84 18.89a509.226 509.226 0 0031 10.83l-9.24-7.5 20.87 3.32a36.15 36.15 0 00-1.46-12.3c4 3.22 9.3 4.3 13.64 7 8.13 5.13 11.52 15 15.95 23.55 1.17 2.26 2.55 4.57 4.66 6a71.91 71.91 0 00-41.7-60.59z" />
            </g>
            <path
              d="M456.94 88.8l.1-.06a71.49 71.49 0 00-6.64 2.84 71.89 71.89 0 00-40.29 64.59v1.74a16 16 0 006.45-1.55c17.52-8.18 28-33.2 32.16-50.65 1.5-6.21 2.91-13.28 8.22-16.91z"
              fill="#3E3E54"
            />
            <path
              d="M511.95 90.82a71.28 71.28 0 00-17.87-5.51 23.06 23.06 0 0112.83 8.06 32.86 32.86 0 013.93 7 72.07 72.07 0 00-60.45 1.25c4.51 9.89 18.5 15.28 27.84 18.89a509.226 509.226 0 0031 10.83l-9.24-7.5 20.87 3.32a36.15 36.15 0 00-1.46-12.3c4 3.22 9.3 4.3 13.64 7 8.13 5.13 11.52 15 15.95 23.55 1.17 2.26 2.55 4.57 4.66 6a71.91 71.91 0 00-41.7-60.59z"
              fill="#3E3E54"
            />
            <path
              d="M401.91 144.32s74-92 159.61 0l-7.4-20.61s-40.17-58.66-68.7-46c-28.53 12.66-56.55 21.67-56.55 21.67l-26.96 44.94z"
              fill="#000"
              opacity={0.1}
            />
            <path
              d="M401.91 142.69s74-92 159.61 0l-7.4-20.61s-40.17-58.66-68.7-46c-28.53 12.66-56.55 21.67-56.55 21.67l-26.96 44.94z"
              fill="#FF6584"
            />
            <path
              d="M341.13 340.88s-15.85 42.28 6.34 80.33c22.19 38.05-19.55 53.91-19.55 53.91M597.98 302.83s27.48 34.88 9.51 66.06-16.91 106.23-16.91 106.23"
              fill="#000"
              opacity={0.1}
            />
            <path
              d="M316.82 506.3h305.47c14.011 0 25.37 11.359 25.37 25.37h-356.2c0-14.008 11.352-25.364 25.36-25.37z"
              fill="#3E3E54"
            />
            <path
              d="M347.9 331.89h243.32a39 39 0 0139 39v141.22H308.9V370.89c0-21.54 17.46-39 39-39z"
              fill="#3E3E54"
            />
            <circle fill="#FFF" cx={469.29} cy={429.93} r={19.03} />
            <path
              d="M406.14 101.2s72.72-72.68 151.15-1.33"
              stroke="#000"
              opacity={0.1}
            />
            <path fill="#F5F5F5" d="M52.28 532h774.71v208H52.28z" />
            <path fill="#000" opacity={0.1} d="M52.28 546h774.71v27H52.28z" />
            <path fill="#F5F5F5" d="M.31 529h878.63v27H.31z" />
          </g>
        </svg>
      );*/
};
