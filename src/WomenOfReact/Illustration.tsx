/* eslint-disable max-len */
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    width: "100%"
  }
}));

export default () => {
  const theme = useTheme();
  const classes = useStyles();
  // const { black, white } = theme.palette.common;
  const primary = "#3F3E56"; // theme.palette.primary.main;
  const gray = theme.palette.grey[100];
  // const skinColor = "#9E616A";
  // 141043

  return (
    <svg className={classes.container} fill="none" viewBox="0 0 800 509">
      <g clipPath="url(#prefix__clip0)">
        <path fill="#fff" d="M0 0h800v509H0z" opacity={0} />
        <path fill={gray} d="M0 367h800v151H0z" opacity={0} />
        <mask
          id="prefix__a"
          width={800}
          height={151}
          x={0}
          y={367}
          maskUnits="userSpaceOnUse"
        >
          <path fill="#171D85" d="M0 367h800v151H0z" />
        </mask>
        <g fill="#3C83E1" mask="url(#prefix__a)" opacity={0}>
          <path d="M134.161 580.843L329.45 317.256l-.847-.629-195.289 263.588m161.56.44l64.867-263.588-1.025-.251-64.867 263.588M-70.478 618l357.689-300.655-.679-.807-357.688 300.654m-178.913-36.198l493.712-263.587-.497-.931-493.713 263.588m-561.801.975L200.283 317.451l-.266-1.019-1012.65 263.587m-153.201-93.696l1064.7-168.86-.165-1.042L-966 485.282m1573.675 94.933L412.386 316.627l-.847.629 195.289 263.587m-159.688-.439l-64.868-263.588-1.024.251 64.867 263.588m366.03 36.537L454.457 316.538l-.679.807L811.466 618m180.088-37.936L497.843 316.476l-.497.931 493.712 263.587m562.562-.975L540.972 316.432l-.266 1.019L1553.35 581.039m153.64-95.758L642.289 316.42l-.166 1.043 1064.697 168.86" />
          <path d="M-15.62 370.667h824.226v-1.054H-15.62v1.054zm0 11.669h824.226v-1.055H-15.62v1.055zm0 14.93h824.226v-1.055H-15.62v1.055zm0 17.074h825.685v-1.054H-15.62v1.054zm0 20.207h825.685v-1.054H-15.62v1.054zm0 24.84h825.685v-1.054H-15.62v1.054zm0 33.292h824.226v-1.054H-15.62v1.054z" />
        </g>
        <path fill="transparent" d="M0-25h800v392H0z" />
        <path
          fill="#fff"
          d="M688.911 366.984H109.604c0-160.105 129.682-289.895 289.653-289.895 159.972 0 289.654 129.79 289.654 289.895z"
          opacity={0.1}
        />
        <path
          fill="#D4FFD3"
          d="M170.451 212.485l16.617-26.144c3.361.06 9.25.14 10.671.072.066-.055.128-.08.185-.072.233.034.142.057-.185.072-1.354 1.142-4.388 15.273-5.797 22.527v3.545l-16.173 14.18-3.545-3.102-1.773-11.078zm-8.419-5.982c-10.413 8.715-32.702 26.809-38.551 29.467l4.21 9.97 40.544-24.814-6.203-14.623zm52.73 51.18l-17.281-40.988 14.401-5.761 15.509 42.539-12.629 4.21z"
        />
        <path
          fill={primary}
          d="M229.611 248.156c-5.093 5.828-12.209 9.71-25.483 6.647l19.942 27.668s-10.741 5.042-7.869 13.301c2.291 6.597 19.531 11.175 19.288-2.324-.368-20.181-5.878-45.292-5.878-45.292zm-102.585-21.048c.332 7.733 0 11.521 10.856 17.946l-27.916 13.476s-.35 10.011-7.755 14.662c-5.912 3.716-18.059-4.279-9.43-14.662 12.902-15.523 34.245-31.422 34.245-31.422z"
        />
        <path
          fill="#c4c4c4"
          d="M125 313.5c0-13.5 4.611-23.543 7.787-32.332l29.689 68.018 37.886 3.102c18.315.739 47.192 4.077 16.174 11.521-38.773 9.306-66.467 1.108-69.569 0C143.865 362.701 125 327 125 313.5z"
        />
        <path
          fill={gray}
          d="M169.786 350.072c15.598-37.576 12.26-57.9 7.977-63.365-5.613 1.772-20.384 8.241-29.246 19.94-8.862 11.698-3.693 45.936 0 61.593l21.269 56.718h4.432c-.148-8.862-1.241-36.247-4.432-74.886z"
        />
        <path
          fill={primary}
          fillRule="evenodd"
          d="M178.133 420.485c-.717-.917-12.927-.999-13.159-.662-.765.625.233 7.684-.551 10.249-.733 2.401-4.098 4.681-4.704 5.804-.18.333-.19.972.146 1.134 2.913 1.397 14.511.673 14.88 0 .795-1.453 3.981-15.791 3.388-16.525zm40.915-68.925c-.985.619-2.315 12.757-2.003 13.023.543.825 7.667.553 10.139 1.595 2.313.975 4.237 4.555 5.292 5.273.313.213.948.288 1.143-.03 1.687-2.754 2.153-14.365 1.521-14.801-1.363-.939-15.301-5.575-16.092-5.06z"
          clipRule="evenodd"
        />
        <path
          fill={primary}
          d="M132.122 281.833l29.245-68.24 16.395 9.748 27.917-7.532c-7.976 14.031-23.053 41.487-24.815 45.64-3.102 7.312-4.431 18.316-3.102 25.258-9.453 8.124-27.251 25.217-31.682 24.814-4.431-.403-11.447-20.235-13.958-29.688z"
        />
        <path
          fill={primary}
          d="M174.217 201.186h-23.485c6.352 10.782 18.168 32.967 23.485 33.676 5.318.709 32.2-17.576 43.869-26.586l-24.815-2.216-14.844 14.18-4.21-19.054zm-37.4-86.783l106.943-7.89 5.967 80.87-106.943 7.89z"
        />
        <path
          fill="#525166"
          d="M166.685 84.204l-29.911 30.353 107.012-7.976 10.635-28.58-87.736 6.203z"
        />
        <path
          fill="#38374d"
          d="M259.295 155.102L254.421 78l-10.635 28.581 5.983 80.868 9.526-32.347z"
        />
        <path
          fill="#D4FFD3"
          d="M153.834 139.794l74.798-5.519 2.452 33.242-74.797 5.519z"
        />
        <path
          fill={primary}
          fillRule="evenodd"
          d="M178.035 158.546c-1.226.086-2.287-.804-2.369-1.988-.049-.69-.669-1.21-1.383-1.16-.713.05-1.256.652-1.207 1.341.082 1.184-.843 2.213-2.07 2.299-1.226.085-2.287-.805-2.37-1.989-.214-3.052 2.186-5.716 5.347-5.937 3.163-.222 5.909 2.083 6.122 5.135.083 1.184-.843 2.213-2.07 2.299m37.686-2.635c-1.226.086-2.287-.804-2.37-1.988-.048-.69-.668-1.21-1.382-1.16-.713.05-1.256.651-1.208 1.341.083 1.184-.843 2.213-2.07 2.298-1.226.086-2.287-.804-2.369-1.988-.214-3.053 2.185-5.717 5.347-5.938 3.163-.221 5.909 2.083 6.122 5.136.083 1.184-.843 2.213-2.07 2.299"
          clipRule="evenodd"
        />
        <path
          fill="#FCE2BB"
          d="M536.626 259.883L492 234.914l-4.035 12.533 43.611 18.082 5.05-5.646z"
        />
        <path
          fill={primary}
          d="M531.664 250.235c.661 7.756 1.478 11.491-8.526 19.293l29.573 9.859s1.633 9.94 9.616 13.629c6.373 2.948 17.463-6.585 7.525-15.834-14.861-13.827-38.188-26.947-38.188-26.947z"
        />
        <path
          fill="#FCE2BB"
          d="M406.809 280.932l25.961-44.056 9.802 8.791-28.556 37.597-7.207-2.332z"
        />
        <path
          fill={primary}
          d="M406.233 270.098c3.338 7.032 4.514 10.67 17.086 12.367l-20.574 23.419s3.599 9.409-1.437 16.618c-4.018 5.759-18.401 3.114-14.479-9.884 5.867-19.432 19.404-42.52 19.404-42.52z"
        />
        <path
          fill={gray}
          d="M422.5 436.141c0-3.209 3.111-88.751 6.082-129.45 8.912 5.199 45.622 15.892 39.918 22.309-5.704 6.417-31.653 73.571-37 107.141-2.971 1.336-9 3.208-9 0z"
        />
        <path
          fill={primary}
          fillRule="evenodd"
          d="M433.855 430.974c-.72-.922-12.999-1.005-13.233-.666-.769.628.236 7.728-.553 10.307-.738 2.414-4.121 4.707-4.731 5.836-.181.336-.191.978.147 1.141 2.929 1.404 14.592.677 14.964 0 .799-1.461 4.003-15.88 3.406-16.618z"
          clipRule="evenodd"
        />
        <path
          fill={gray}
          d="M507 436.586c0-3.208-3.052-88.75-6.023-129.449-8.912 5.199-45.181 17.946-39.477 24.363 5.704 6.417 31.153 71.517 36.5 105.086 2.971 1.337 9 3.209 9 0z"
        />
        <path
          fill={primary}
          fillRule="evenodd"
          d="M495.703 431.419c.72-.921 12.999-1.005 13.233-.665.769.628-.235 7.727.554 10.307.737 2.414 4.121 4.707 4.73 5.836.182.335.192.978-.147 1.14-2.929 1.405-14.592.677-14.963 0-.799-1.46-4.004-15.879-3.407-16.618z"
          clipRule="evenodd"
        />
        <path
          fill={primary}
          d="M464.676 338.329c-4.278.357-27.628-18.418-35.203-28.964-7.575-10.546 13.591-72.189 13.591-72.189l27.405 15.374 20.275-12.923s15.3 61.94 10.027 69.738c-5.273 7.798-31.817 28.608-36.095 28.964z"
        />
        <path
          fill="#FCE2BB"
          d="M453.536 232.72l2.006-16.933h17.601l2.228 16.933v19.384H463.34l-9.804-19.384z"
        />
        <path
          fill={primary}
          d="M430.81 234.057c0-3.03 13.814-6.016 20.721-7.13 3.788 7.204 12.165 21.612 15.373 21.612 3.209 0 7.279-14.408 8.913-21.612 7.946 2.377 23.751 7.575 23.394 9.358-.446 2.228-26.068 25.845-32.307 26.291-6.238.445-36.094-24.732-36.094-28.519zm91.61-98.998l-107.289 10.86 8.213 81.132 107.289-10.86z"
        />
        <path
          fill="#525166"
          d="M487.567 110.367l34.922 24.837-107.372 10.788-15.524-26.448 87.974-9.177z"
        />
        <path
          fill="#656477"
          d="M408.23 196.754l-8.637-77.21 15.523 26.448 8.198 81.133-15.084-30.371z"
        />
        <path
          fill="#FCE2BB"
          d="M510.001 163.177l-75.04 7.596 3.375 33.349 75.04-7.596z"
        />
        <path
          fill={primary}
          fillRule="evenodd"
          d="M458.035 188.546c-1.226.086-2.287-.804-2.37-1.988-.048-.69-.668-1.21-1.382-1.16-.713.05-1.256.652-1.208 1.341.083 1.184-.843 2.213-2.07 2.299-1.226.085-2.287-.805-2.369-1.989-.214-3.052 2.185-5.716 5.347-5.937 3.163-.222 5.909 2.083 6.122 5.135.083 1.184-.843 2.213-2.07 2.299m37.686-2.635c-1.226.086-2.287-.804-2.37-1.988-.048-.69-.668-1.21-1.382-1.16-.714.05-1.256.651-1.208 1.341.083 1.184-.843 2.213-2.07 2.298-1.226.086-2.287-.804-2.37-1.988-.213-3.052 2.186-5.717 5.348-5.938 3.163-.221 5.908 2.083 6.122 5.136.083 1.184-.843 2.213-2.07 2.299"
          clipRule="evenodd"
        />
        <path
          fill="#BAEDFD"
          d="M282.249 300.389l11.303-50.636 12.207 5.425-15.824 45.211h-7.686z"
        />
        <path
          fill={primary}
          d="M278.31 290.11c5.418 5.746 7.69 8.891 20.356 6.602l-12.547 29.033s6.413 7.958 3.803 16.49c-2.081 6.814-16.791 8.752-17.064-5.019-.404-20.591 5.452-47.106 5.452-47.106z"
        />
        <path
          fill="#BAEDFD"
          d="M370.636 273.262l-25.996-16.276c.904-2.185 5.787-9.042 9.042-9.946 4.069-1.13 32.325 22.048 32.325 25.996 0 4.295-8.364 13.488-11.528 16.954-3.391-.904-9.721-5.425-8.138-7.686 1.61-2.3 4.521-6.932 4.295-9.042z"
        />
        <path
          fill={primary}
          d="M367.092 275.298c2.417 6.166 3.065 6.233 15.371 9.946l-19.691 14.124s2.807 8.733-3.14 13.455c-4.747 3.772-19.172-1.677-13.586-11.166 8.354-14.184 21.046-26.359 21.046-26.359z"
        />
        <path
          fill={gray}
          d="M288.031 446.494c0-3.255 5.124-90.044 8.138-131.337 9.042 5.275 31.331 23.103 25.544 29.613-5.787 6.511-19.215 67.666-24.64 101.724-3.014 1.357-9.042 3.256-9.042 0z"
        />
        <path
          fill={gray}
          d="M375.061 449.045c-.279-3.243-22.385-85.095-28.934-125.976-8.556 6.032-31.191 13.677-24.866 19.667 6.324 5.989 34.845 72.842 43.176 106.309 3.119 1.093 10.904 3.244 10.624 0z"
        />
        <path
          fill={primary}
          fillRule="evenodd"
          d="M299.711 443.286c-.731-.935-13.189-1.019-13.426-.675-.78.638.239 7.84-.562 10.458-.748 2.449-4.181 4.775-4.799 5.921-.184.34-.194.992.149 1.157 2.972 1.425 14.805.687 15.182 0 .81-1.482 4.062-16.111 3.456-16.861zm62.088-.452c.731-.935 13.189-1.019 13.426-.675.781.638-.238 7.84.562 10.457.748 2.45 4.181 4.776 4.799 5.922.184.34.194.992-.149 1.157-2.972 1.425-14.805.687-15.181 0-.811-1.482-4.062-16.112-3.457-16.861z"
          clipRule="evenodd"
        />
        <path
          fill={primary}
          d="M307.923 284.64l-6.555-36.621 27.804 15.598 20.571-13.111-11.076 36.394 7.459 36.169c-5.35 7.912-19.395 20.887-23.735 21.249-4.34.362-18.537-18.009-26.222-28.709l11.754-30.969z"
        />
        <path
          fill="#BAEDFD"
          d="M311.992 243.498l2.035-17.18h17.858l2.261 17.18v19.667h-12.207l-9.947-19.667z"
        />
        <path
          fill={primary}
          d="M288.935 244.855c0-3.075 14.015-6.104 21.023-7.234 3.843 7.309 12.342 21.927 15.598 21.927 3.255 0 7.384-14.618 9.042-21.927 8.062 2.411 24.097 7.686 23.735 9.494-.452 2.261-26.448 26.222-32.777 26.674-6.33.453-36.621-25.092-36.621-28.934z"
        />
        <circle cx={328.947} cy={171.387} r={61.261} fill={primary} />
        <circle cx={328.72} cy={171.161} r={39.785} fill="#BAEDFD" />
        <path
          fill={primary}
          fillRule="evenodd"
          d="M319.151 188.411c-.521-1.162-.828-2.414-.829-3.703 0-.591.247-1.169.677-1.587a2.368 2.368 0 011.637-.657h16.199c.609 0 1.204.239 1.636.657.431.418.678.996.678 1.587-.006 1.934-.682 3.782-1.772 5.375a11.147 11.147 0 01-4.5 3.81 9.947 9.947 0 01-4.142.917c-2.233 0-4.269-.773-5.897-1.935a11.151 11.151 0 01-3.687-4.464z"
          clipRule="evenodd"
        />
        <mask
          id="prefix__b"
          width={22}
          height={13}
          x={318}
          y={182}
          maskUnits="userSpaceOnUse"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M319.151 188.411c-.521-1.162-.828-2.414-.829-3.703 0-.591.247-1.169.677-1.587a2.368 2.368 0 011.637-.657h16.199c.609 0 1.204.239 1.636.657.431.418.678.996.678 1.587-.006 1.934-.682 3.782-1.772 5.375a11.147 11.147 0 01-4.5 3.81 9.947 9.947 0 01-4.142.917c-2.233 0-4.269-.773-5.897-1.935a11.151 11.151 0 01-3.687-4.464z"
            clipRule="evenodd"
          />
        </mask>
        <g mask="url(#prefix__b)">
          <path
            fill="#E74144"
            fillRule="evenodd"
            d="M325.083 190.388a2.726 2.726 0 00-.341 1.284c0 .205.101.405.278.55.013.01.028.024.045.04.219.203.87.804 3.957.804 3.087 0 3.737-.601 3.956-.804.018-.016.032-.03.045-.04a.72.72 0 00.279-.55c-.002-.671-.28-1.311-.728-1.863a4.47 4.47 0 00-1.85-1.321 4.72 4.72 0 00-4.126.353c-.672.404-1.192.943-1.515 1.547z"
            clipRule="evenodd"
          />
        </g>
        <path
          fill={primary}
          fillRule="evenodd"
          d="M312.863 174.431c-1.254 0-2.271-.982-2.271-2.192 0-.706-.594-1.279-1.324-1.279-.73 0-1.325.573-1.325 1.279 0 1.21-1.015 2.192-2.27 2.192-1.254 0-2.271-.982-2.271-2.192 0-3.123 2.632-5.663 5.866-5.663 3.235 0 5.865 2.54 5.865 5.663 0 1.21-1.015 2.192-2.27 2.192m38.544 0c-1.254 0-2.27-.982-2.27-2.193 0-.705-.594-1.278-1.325-1.278-.729 0-1.324.573-1.324 1.278 0 1.211-1.016 2.193-2.271 2.193-1.254 0-2.27-.982-2.27-2.193 0-3.122 2.631-5.663 5.865-5.663 3.235 0 5.866 2.541 5.866 5.663 0 1.211-1.016 2.193-2.271 2.193"
          clipRule="evenodd"
        />
        <path
          fill={primary}
          d="M269.902 81.315l9.573-4.063 21.549 50.776-9.573 4.063zm117.376 3.94l-9.573-4.063-20.836 49.097 9.573 4.062z"
        />
        <circle cx={278.25} cy={79.564} r={13.563} fill={gray} />
        <circle cx={383.563} cy={79.563} r={13.563} fill={gray} />
        <path
          fill={primary}
          d="M575.533 426.367h90.934v14.466a2.068 2.068 0 01-2.067 2.067h-86.8a2.068 2.068 0 01-2.067-2.067v-14.466z"
        />
        <path
          fill={gray}
          d="M668.533 329.233V424.3a2.073 2.073 0 01-2.066 2.067h-90.934a2.073 2.073 0 01-2.066-2.067v-95.067a6.195 6.195 0 016.2-6.2h82.666a6.198 6.198 0 016.2 6.2z"
        />
        <path
          fill="#baedfd"
          d="M585.867 331.3h70.266a4.133 4.133 0 014.134 4.133v53.734a4.133 4.133 0 01-4.134 4.133h-70.266a4.133 4.133 0 01-4.134-4.133v-53.734a4.133 4.133 0 014.134-4.133z"
        />
        <path
          fill="#fff"
          d="M623.067 407.767a2.073 2.073 0 01-2.067 2.066h-47.533V405.7H621a2.073 2.073 0 012.067 2.067zm45.466-2.067v4.133h-8.266a2.068 2.068 0 010-4.133h8.266z"
          opacity={0.4}
        />
        <path
          fill={primary}
          d="M623.067 403.633H658.2c1.141 0 2.067.926 2.067 2.067v4.133a2.068 2.068 0 01-2.067 2.067h-35.133a2.068 2.068 0 01-2.067-2.067V405.7c0-1.141.926-2.067 2.067-2.067z"
        />
        <path
          fill="#c4c4c4"
          d="M656.133 395.367h-70.266a6.207 6.207 0 01-6.2-6.2v-53.734a6.207 6.207 0 016.2-6.2h70.266a6.207 6.207 0 016.2 6.2v53.734a6.207 6.207 0 01-6.2 6.2zm-70.266-62a2.068 2.068 0 00-2.067 2.066v53.734c0 1.14.926 2.066 2.067 2.066h70.266a2.068 2.068 0 002.067-2.066v-53.734c0-1.14-.926-2.066-2.067-2.066h-70.266z"
        />
        <path
          fill="#3F3E56"
          d="M583.8 418.005a1.959 1.959 0 100-3.918 1.959 1.959 0 000 3.918z"
        />
        <rect
          width={102.17}
          height={57.619}
          x={567.692}
          y={226.662}
          fill={primary}
          rx={28.809}
        />
        <path
          fill="#FF93D3"
          d="M626.461 271.584c-.58-1.251-4.83-1.323-5.281 0-.279.866 1.632 2.646 2.598 2.598.987-.072 3.026-1.852 2.683-2.598z"
        />
        <circle cx={646.695} cy={255.175} r={21.384} fill={gray} />
        <circle cx={646.695} cy={255.769} r={14.256} fill={primary} />
        <circle cx={652.338} cy={248.344} r={6.831} fill="#fff" />
        <circle cx={658.279} cy={256.066} r={2.079} fill="#fff" />
        <circle cx={601.551} cy={257.551} r={21.384} fill={gray} />
        <circle cx={600.957} cy={255.769} r={14.256} fill={primary} />
        <circle cx={606.6} cy={248.344} r={6.831} fill="#fff" />
        <circle cx={612.54} cy={256.066} r={2.079} fill="#fff" />
        <path
          fill="#656477"
          d="M622.935 255.175s-9.574-4.158-21.384-4.158-21.384 4.158-21.384 4.158c0-11.81 9.574-21.384 21.384-21.384s21.384 9.574 21.384 21.384zm45.145 0s-9.574-4.158-21.385-4.158c-11.81 0-21.384 4.158-21.384 4.158 0-11.811 9.574-21.385 21.384-21.385 11.811 0 21.385 9.574 21.385 21.385z"
        />
        <path
          fill={primary}
          d="M568.87 282.979c11.003.322 11.578 19.395 15.63 23.87 4.052 4.476 7.5 4.5 7.5 4.5h5.096l.904 9s-7.357.985-13-.5c-5.643-1.485-9.941-13.592-12.84-21.476-3.625-9.855-8.503-4.257-11.78-5.38-3.276-1.122-5.262-10.416 8.49-10.014zm65.945 23.28h22.572v13.068h-22.572z"
        />
        <path
          fill={primary}
          d="M634.815 306.259h22.572v13.068h-22.572zm17.423-14.85c0-3.267-11.484-3.762-16.335-1.782l-.891 8.613c6.534-.891 17.226 1.188 17.226-6.831z"
        />
        <path
          fill="#E6E7FE"
          fillRule="evenodd"
          d="M650.203 320.236c-1.043-1.159 1.69-17.297 2.189-17.526 1.003-.864 10.09 2.098 13.659 1.659 3.34-.409 7.133-4.32 8.757-4.859.482-.16 1.328-.025 1.463.457 1.166 4.171-2.489 19.313-3.464 19.644-2.102.711-21.773 1.58-22.604.625z"
          clipRule="evenodd"
        />
        <path
          fill={primary}
          fillRule="evenodd"
          d="M650.203 320.236c-1.043-1.159 1.69-17.297 2.189-17.526 1.003-.864 10.09 2.098 13.659 1.659 3.34-.409 7.133-4.32 8.757-4.859.482-.16 1.328-.025 1.463.457 1.166 4.171-2.489 19.313-3.464 19.644-2.102.711-21.773 1.58-22.604.625z"
          clipRule="evenodd"
          opacity={0.25}
        />
        <path
          fill={primary}
          d="M594.338 213.211c-7.739-2.16-9.9 12.82-10.013 20.579l26.136-6.41c-2.15-3.823-8.384-12.01-16.123-14.169z"
        />
        <path
          fill={primary}
          d="M595.588 218.472c-4.573-1.295-5.85 7.692-5.917 12.348l15.444-3.846c-1.27-2.294-4.954-7.206-9.527-8.502zm44.242-4.102c6.684-1.865 8.55 11.072 8.648 17.773l-22.573-5.536c1.857-3.302 7.241-10.373 13.925-12.237z"
        />
        <path
          fill={primary}
          d="M638.75 218.914c3.95-1.119 5.053 6.643 5.11 10.664l-13.338-3.322c1.097-1.981 4.279-6.223 8.228-7.342z"
        />
        <path fill="#E59594" d="M637.419 218.948h7.223v97.755h-7.223z" />
        <path
          fill={primary}
          d="M605.412 325.862c-22.81-.475-21.582-30.196-18.414-43.957 16.335.099 50.623-2.97 50.49.891-.237 6.891-1.485 23.958-1.782 27.622h8.91l.594 15.444c-3.762.198-16.988.475-39.798 0z"
        />
        <path
          fill="#E6E7FE"
          fillRule="evenodd"
          d="M635.323 325.77c-1.043-1.159 1.69-17.297 2.189-17.526 1.003-.864 10.09 2.098 13.659 1.659 3.34-.409 7.133-4.32 8.757-4.859.482-.16 1.328-.025 1.463.457 1.166 4.171-2.489 19.313-3.464 19.644-2.102.711-21.773 1.58-22.604.625z"
          clipRule="evenodd"
        />
        <path fill="#E59594" d="M637.419 82.482h7.223v208.994h-7.223z" />
        <path
          fill={primary}
          d="M637 82c52.648 2.618 81.484 2.72 131.464 0 0 0-5.464 41-5.464 56s5.464 32.124 5.464 32.124c-51.341-6.737-80.124-6.933-131.464 0V82z"
        />
        <path
          fill="#fff"
          d="M731 126.006c0-3.72-4.646-7.244-11.768-9.43 1.643-7.279.913-13.07-2.306-14.924-.742-.435-1.61-.641-2.557-.641v2.553c.525 0 .947.103 1.301.297 1.553.893 2.226 4.292 1.701 8.663a35.492 35.492 0 01-.582 3.365 55.129 55.129 0 00-7.248-1.247 55.73 55.73 0 00-4.749-5.723c3.721-3.467 7.214-5.367 9.588-5.367V101c-3.139 0-7.248 2.243-11.403 6.134-4.155-3.868-8.264-6.088-11.403-6.088v2.552c2.363 0 5.867 1.888 9.588 5.333a53.9 53.9 0 00-4.714 5.711c-2.58.274-5.022.698-7.26 1.258a34.753 34.753 0 01-.593-3.318c-.537-4.372.125-7.771 1.666-8.675.343-.206.788-.298 1.313-.298v-2.552c-.959 0-1.826.206-2.58.641-3.207 1.854-3.926 7.633-2.271 14.889-7.1 2.197-11.723 5.711-11.723 9.419 0 3.719 4.646 7.244 11.768 9.43-1.643 7.278-.913 13.069 2.306 14.923.742.435 1.61.641 2.568.641 3.139 0 7.249-2.243 11.404-6.134 4.155 3.868 8.264 6.088 11.403 6.088.959 0 1.826-.206 2.58-.641 3.207-1.854 3.926-7.633 2.271-14.889 7.077-2.186 11.7-5.71 11.7-9.418zm-14.862-7.634a51.3 51.3 0 01-1.541 4.521 54.595 54.595 0 00-1.495-2.747 61.68 61.68 0 00-1.644-2.678c1.621.241 3.185.538 4.68.904zm-5.228 12.189a60.672 60.672 0 01-2.751 4.371c-1.7.149-3.424.229-5.159.229-1.724 0-3.447-.08-5.137-.217a63.3 63.3 0 01-2.762-4.349 59.683 59.683 0 01-2.374-4.555 59.935 59.935 0 012.363-4.566 60.697 60.697 0 012.751-4.372c1.7-.149 3.424-.229 5.159-.229 1.724 0 3.447.08 5.137.218a60.059 60.059 0 015.136 8.903 64.217 64.217 0 01-2.363 4.567zm3.687-1.488a48.656 48.656 0 011.575 4.555c-1.495.366-3.07.675-4.702.915a63.345 63.345 0 001.643-2.712 65.765 65.765 0 001.484-2.758zm-11.574 12.211a47.076 47.076 0 01-3.173-3.662c1.027.045 2.077.08 3.139.08 1.073 0 2.134-.023 3.173-.08a44.657 44.657 0 01-3.139 3.662zm-8.493-6.741a51.387 51.387 0 01-4.68-.904 52.06 52.06 0 011.541-4.52c.468.915.959 1.831 1.496 2.746a75.369 75.369 0 001.643 2.678zm8.436-23.815a47.104 47.104 0 013.173 3.662 70.115 70.115 0 00-3.139-.08c-1.073 0-2.135.023-3.173.08a44.49 44.49 0 013.139-3.662zm-8.447 6.74a64.024 64.024 0 00-3.128 5.459 49.24 49.24 0 01-1.575-4.555 55.882 55.882 0 014.703-.904zm-10.33 14.329c-4.041-1.729-6.655-3.995-6.655-5.791 0-1.797 2.614-4.074 6.655-5.791.981-.424 2.054-.801 3.162-1.156a54.906 54.906 0 002.568 6.97 54.224 54.224 0 00-2.534 6.935 34.808 34.808 0 01-3.196-1.167zm6.141 16.353c-1.553-.892-2.226-4.291-1.701-8.663.126-1.076.331-2.209.582-3.365 2.237.55 4.68.973 7.248 1.248 1.541 2.117 3.139 4.04 4.749 5.722-3.721 3.468-7.214 5.367-9.588 5.367-.514-.011-.948-.114-1.29-.309zm27.075-8.72c.537 4.372-.125 7.771-1.666 8.675-.343.206-.788.297-1.313.297-2.363 0-5.867-1.888-9.588-5.333a53.9 53.9 0 004.714-5.711c2.58-.274 5.022-.698 7.26-1.258.262 1.155.468 2.266.593 3.33zm4.395-7.633c-.982.423-2.055.801-3.162 1.155a55.203 55.203 0 00-2.568-6.969 54.334 54.334 0 002.534-6.935c1.13.354 2.203.743 3.207 1.167 4.041 1.728 6.655 3.994 6.655 5.791-.011 1.796-2.625 4.074-6.666 5.791z"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h800v509H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};