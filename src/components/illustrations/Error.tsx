/* eslint-disable max-len */
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";

interface ErrorProps {
  warning?: boolean;
}

const useStyles = makeStyles(() => ({
  container: {
    height: "50%",
    width: "50%"
  }
}));

export default ({ warning }: ErrorProps) => {
  const theme = useTheme();
  const classes = useStyles();
  const { black: fill } = theme.palette.common;
  return (
    <svg className={classes.container} viewBox="0 0 216 253">
      <g fill="none" fillRule="evenodd">
        <circle cx={79} cy={139} r={79} {...{ fill }} />
        <ellipse
          transform="rotate(-89.325 62.087 244.735)"
          cx={62.087}
          cy={244.735}
          rx={7.5}
          ry={20}
          {...{ fill }}
        />
        <ellipse
          transform="rotate(-89.325 110.087 243.735)"
          cx={110.087}
          cy={243.735}
          rx={7.5}
          ry={20}
          {...{ fill }}
        />
        <circle fill="#FFF" cx={82} cy={119} r={27} />
        <circle cx={82} cy={119} r={9} {...{ fill }} />
        <path
          d="M4.047 65.333c-6.042-28.64 14.687-57.265 46.3-63.934 31.613-6.669 62.138 11.143 68.18 39.784 6.042 28.64-14.978 38.93-46.591 45.599-31.613 6.669-61.847 7.192-67.89-21.45z"
          fill={theme.palette.grey[100]}
          // fill={theme.palette.secondary.main}
        />
        {warning ? (
          <path
            d="M43.13 243.754a9.14 9.14 0 01-8.04-13.47l81.57-151.48a9.13 9.13 0 0116.08 0l81.53 151.48a9.14 9.14 0 01-8 13.47H43.13zM128.989 219l.012-15h-16v15h15.988zm-.476-23h-.011c0-16.644 22.499-18.807 22.499-37.804C151 141.41 137.57 128 121 128c-7.96-.014-15.6 3.188-21.228 8.899-5.63 5.71-8.786 13.459-8.772 21.535h15.001c0-8.083 6.75-15.311 14.999-15.311 8.25 0 15.001 6.704 15.001 15.073 0 15.193-22.502 13.79-22.502 37.804h15.013z"
            fill={theme.palette.grey[100]}
            fillRule="nonzero"
          />
        ) : (
          <path
            d="M43.13 243.754h163.14a9.14 9.14 0 008-13.47l-81.53-151.48a9.13 9.13 0 00-16.08 0l-81.57 151.48a9.14 9.14 0 008.04 13.47zm91.95-27.68h-20.76v-20.75h20.76v20.75zm0-34.59h-20.76v-41.51h20.76v41.51z"
            fill={theme.palette.grey[100]}
            fillRule="nonzero"
          />
        )}
        <ellipse
          transform="rotate(-68.158 55.278 164.206)"
          cx={55.278}
          cy={164.206}
          rx={12.4}
          ry={39.5}
          {...{ fill }}
        />
      </g>
    </svg>
  );
};
