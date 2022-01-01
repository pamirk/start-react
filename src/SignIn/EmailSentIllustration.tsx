/* eslint-disable max-len */
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    height: "61%",
    width: "61%"
  }
}));

export default () => {
  const theme = useTheme();
  const classes = useStyles();
  const { black, white } = theme.palette.common;
  const primary = theme.palette.primary.main;
  const skinColor = "#9E616A";
  return (
    <svg className={classes.container} viewBox="0 0 799 756">
      <defs>
        <linearGradient
          x1="50.003%"
          y1="99.998%"
          x2="50.003%"
          y2="-.002%"
          id="prefix__c"
        >
          <stop stopColor="gray" stopOpacity="0.5" offset="0%" />
          <stop stopColor="gray" stopOpacity="0.32" offset="54%" />
          <stop stopColor="gray" stopOpacity="0.25" offset="100%" />
        </linearGradient>
      </defs>
      <g transform="translate(4)" fill="none" fillRule="evenodd">
        <path
          d="M193.32 533.03s-34.08 78.64 145.05 99.62v79.52h207.09v-210.6l-354.8-9.61 2.66 41.07z"
          fill={skinColor}
        />
        <path
          d="M290.66 200.85c-10.449 16.488-32.252 21.443-48.8 11.09l-103.39-68.11c-16.488-10.449-21.443-32.252-11.09-48.8 10.449-16.488 32.252-21.443 48.8-11.09l103.37 68.12c16.489 10.442 21.452 32.238 11.11 48.79z"
          fill={skinColor}
        />
        <circle fill={skinColor} cx={506.14} cy={512.94} r={77.77} />
        <rect
          fill="url(#prefix__c)"
          x={181.97}
          width={322.42}
          height={581.96}
          rx={12.25}
        />
        <rect
          fill="#FFF"
          x={186.33}
          y={7.87}
          width={313.7}
          height={566.24}
          rx={13.64}
        />
        <path
          d="M421.99 22.06c-1.875 12.408-12.521 21.593-25.07 21.63H288.58c-12.545-.042-23.185-9.226-25.06-21.63h-57.4a11.91 11.91 0 00-11.92 11.91v514a11.91 11.91 0 0011.91 11.92h274.14a11.91 11.91 0 0011.92-11.91v-514a11.91 11.91 0 00-11.91-11.92h-58.27z"
          fill={primary}
        />
        <rect
          fill="#DBDBDB"
          x={308.67}
          y={28.84}
          width={69.91}
          height={4.37}
          rx={2}
        />
        <circle fill="#DBDBDB" cx={393.43} cy={30.59} r={2.62} />
        <rect
          fill={skinColor}
          transform="rotate(-13.01 526.884 398.957)"
          x={491.494}
          y={257.652}
          width={70.78}
          height={282.61}
          rx={35.39}
        />
        <path fill={black} d="M295.59 694.15h280v54h-280z" />
        <path
          d="M279.339 192.002l125.83.286-.158 69.23a4.18 4.18 0 01-4.19 4.17l-117-.266a4.61 4.61 0 01-4.599-4.62l.157-68.8h-.04z"
          fill={primary}
        />
        <path
          d="M279.339 192.002l125.83.286-.158 69.23a4.18 4.18 0 01-4.19 4.17l-117-.266a4.61 4.61 0 01-4.599-4.62l.157-68.8h-.04z"
          fill="#FFF"
          opacity={0.2}
        />
        <path
          d="M279.35 191.98l-.14 63.59a9.77 9.77 0 009.75 9.79l106.29.24"
          fill="#F5F5F5"
        />
        <path
          d="M405.19 192.26l-.14 63.63a9.77 9.77 0 01-9.79 9.75l-106.29-.24"
          fill="#FFF"
        />
        <path
          d="M339.59 142.23l-56 41.3a9.75 9.75 0 00-4.13 8.45l125.89.4c0-4.65-1-5.87-3.08-7.63l-57.05-42.5a4.69 4.69 0 00-5.63-.02z"
          fill={primary}
        />
        <path
          d="M339.59 142.23l-56 41.3a9.75 9.75 0 00-4.13 8.45l125.89.4c0-4.65-1-5.87-3.08-7.63l-57.05-42.5a4.69 4.69 0 00-5.63-.02z"
          fill="#000"
          opacity={0.2}
        />
        <path
          fill="#FFF"
          d="M390.44 156.31l-13.8-10.58-36.57 47.69-20.31-15.57-10.59 13.8 27.21 20.84 6.98 5.23z"
        />
        <path
          d="M267.92 306.57c-10.449 16.488-32.252 21.443-48.8 11.09l-88.51-57.63c-16.488-10.449-21.443-32.252-11.09-48.8 10.449-16.488 32.252-21.443 48.8-11.09l88.51 57.63c16.488 10.449 21.443 32.252 11.09 48.8z"
          fill={skinColor}
        />
        <path
          d="M231.21 511.06c-10.449 16.488-32.252 21.443-48.8 11.09l-43.07-31.42c-16.488-10.449-21.443-32.252-11.09-48.8 10.449-16.488 32.252-21.443 48.8-11.09l43.07 31.42c16.488 10.449 21.443 32.252 11.09 48.8z"
          fill={skinColor}
        />
        <path fill={white} d="M248.18 329.57h190v44h-190z" />
        <path
          d="M249.56 408.82c-10.449 16.488-32.252 21.443-48.8 11.09l-70.16-45.4c-16.488-10.449-21.443-32.252-11.09-48.8 10.432-16.506 32.239-21.483 48.8-11.14l70.16 45.4c16.518 10.45 21.477 32.291 11.09 48.85z"
          fill={skinColor}
        />
      </g>
    </svg>
  );
};
