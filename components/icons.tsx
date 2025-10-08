import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || size}
    height={height || size}
    viewBox="0 0 23 23"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_263_531)">
      <mask
        id="mask0_263_531"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="23"
        height="23"
      >
        <path
          d="M11.667 22.4996C17.7421 22.4996 22.667 17.5747 22.667 11.4996C22.667 5.42444 17.7421 0.499573 11.667 0.499573C5.59186 0.499573 0.666992 5.42444 0.666992 11.4996C0.666992 17.5747 5.59186 22.4996 11.667 22.4996Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_263_531)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.7684 2.07061L15.0812 7.70705L14.8252 7.49735C12.6689 5.73094 9.48896 6.04699 7.72255 8.20327C7.6767 8.25924 7.63206 8.31619 7.58865 8.37408L10.7493 12.2333H-1.35254L-0.337433 0.15318L9.46297 -1.03461L18.263 -0.40275L19.7684 2.07061Z"
          fill="white"
        />
      </g>
      <mask
        id="mask1_263_531"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="23"
        height="23"
      >
        <path
          d="M11.667 22.4996C17.7421 22.4996 22.667 17.5747 22.667 11.4996C22.667 5.42444 17.7421 0.499573 11.667 0.499573C5.59186 0.499573 0.666992 5.42444 0.666992 11.4996C0.666992 17.5747 5.59186 22.4996 11.667 22.4996Z"
          fill="#BCFF2F"
        />
      </mask>
      <g mask="url(#mask1_263_531)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.52258 20.911L8.20983 15.2745L8.46581 15.4842C10.6221 17.2506 13.8021 16.9346 15.5685 14.7783C15.6143 14.7223 15.659 14.6654 15.7024 14.6075L12.5417 10.7483H24.6436L23.6284 22.8284L13.828 24.0162L5.02805 23.3843L3.52258 20.911Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_263_531">
        <rect
          width="22"
          height="22"
          fill="white"
          transform="translate(0.666992 0.499573)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const ArrowRightIcon: React.FC<IconSvgProps> = ({ color = "white" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <rect
      x="3.40625"
      y="9.11914"
      width="1.78571"
      height="1.78571"
      fill={color}
    />
    <rect
      x="5.90625"
      y="9.11914"
      width="1.78571"
      height="1.78571"
      fill={color}
    />
    <rect
      x="8.4082"
      y="9.12012"
      width="1.78571"
      height="1.78571"
      fill={color}
    />
    <rect
      x="10.9102"
      y="9.11914"
      width="1.78571"
      height="1.78571"
      fill={color}
    />
    <rect
      x="13.4102"
      y="6.63281"
      width="1.78571"
      height="1.78571"
      fill={color}
    />
    <rect
      width="1.78571"
      height="1.78571"
      transform="matrix(-1 0 0 1 12.6953 14.0526)"
      fill={color}
    />
    <rect
      x="10.9102"
      y="4.18652"
      width="1.78571"
      height="1.78571"
      fill={color}
    />
    <rect
      width="1.78571"
      height="1.78571"
      transform="matrix(-1 0 0 1 15.1973 11.6064)"
      fill={color}
    />
    <rect
      x="13.4102"
      y="9.11914"
      width="1.78571"
      height="1.78571"
      fill={color}
    />
    <rect
      x="15.9121"
      y="9.11914"
      width="1.78571"
      height="1.78571"
      fill={color}
    />
  </svg>
);

export const ArrowUpRightIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || size}
    height={height || size}
    viewBox="0 0 98 98"
    fill="none"
    {...props}
  >
    <rect
      x="24.5723"
      y="71.6289"
      width="8.75"
      height="8.75"
      transform="rotate(-46.8706 24.5723 71.6289)"
      fill={color}
    />
    <rect
      x="32.9512"
      y="62.6836"
      width="8.75"
      height="8.75"
      transform="rotate(-46.8706 32.9512 62.6836)"
      fill={color}
    />
    <rect
      x="41.3301"
      y="53.7402"
      width="8.75"
      height="8.75"
      transform="rotate(-46.8706 41.3301 53.7402)"
      fill={color}
    />
    <rect
      x="49.7109"
      y="44.793"
      width="8.75"
      height="8.75"
      transform="rotate(-46.8706 49.7109 44.793)"
      fill={color}
    />
    <rect
      x="49.1953"
      y="27.5137"
      width="8.75"
      height="8.75"
      transform="rotate(-46.8706 49.1953 27.5137)"
      fill={color}
    />
    <rect
      width="8.75"
      height="8.75"
      transform="matrix(-0.683648 0.729812 0.729812 0.683648 73.334 54.9336)"
      fill={color}
    />
    <rect
      x="32.0703"
      y="28.2676"
      width="8.75"
      height="8.75"
      transform="rotate(-46.8706 32.0703 28.2676)"
      fill={color}
    />
    <rect
      width="8.75"
      height="8.75"
      transform="matrix(-0.683648 0.729812 0.729812 0.683648 72.9609 37.7891)"
      fill={color}
    />
    <rect
      x="58.0898"
      y="35.8477"
      width="8.75"
      height="8.75"
      transform="rotate(-46.8706 58.0898 35.8477)"
      fill={color}
    />
    <rect
      x="66.4688"
      y="26.9023"
      width="8.75"
      height="8.75"
      transform="rotate(-46.8706 66.4688 26.9023)"
      fill={color}
    />
  </svg>
);

export const ArrowDownIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || size}
    height={height || size}
    viewBox="0 0 17 16"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.49998 9.72528L13.362 4.86328L14.3046 5.80595L8.97598 11.1346C8.84971 11.2608 8.6785 11.3317 8.49998 11.3317C8.32146 11.3317 8.15024 11.2608 8.02398 11.1346L2.69531 5.80595L3.63798 4.86328L8.49998 9.72528Z"
      fill={color}
    />
  </svg>
);

export const SecurityIcon1: React.FC<IconSvgProps> = ({
  size = 80,
  width,
  height,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || size}
    height={height || size}
    viewBox="0 0 80 81"
    fill="none"
    {...props}
  >
    <rect
      x="16.0312"
      y="62.1562"
      width="47.9003"
      height="5.32226"
      fill="white"
    />
    <rect
      x="16.0312"
      y="29.3359"
      width="47.9003"
      height="5.32226"
      fill="white"
    />
    <rect
      x="10.707"
      y="34.6582"
      width="5.32226"
      height="27.4983"
      fill="white"
    />
    <rect
      x="24.9004"
      y="39.9795"
      width="5.32226"
      height="16.8538"
      fill="white"
    />
    <rect
      x="23.127"
      y="39.9795"
      width="8.87043"
      height="7.98339"
      fill="white"
    />
    <rect
      x="36.4316"
      y="39.9795"
      width="8.87043"
      height="7.98339"
      fill="white"
    />
    <rect
      x="48.8516"
      y="39.9795"
      width="8.87043"
      height="7.98339"
      fill="white"
    />
    <rect
      x="38.207"
      y="39.9795"
      width="5.32226"
      height="16.8538"
      fill="white"
    />
    <rect
      x="26.6758"
      y="20.4658"
      width="5.32226"
      height="12.4186"
      fill="white"
    />
    <rect
      x="32.873"
      y="14.2559"
      width="5.32226"
      height="8.83165"
      transform="rotate(44.5718 32.873 14.2559)"
      fill="white"
    />
    <rect
      width="5.32226"
      height="8.83165"
      transform="matrix(-0.712371 0.701803 0.701803 0.712371 47.3203 14.2559)"
      fill="white"
    />
    <rect
      x="47.9629"
      y="20.4658"
      width="5.32226"
      height="12.4186"
      fill="white"
    />
    <path d="M32.8828 14.2559H47.319V19.5781H32.8828V14.2559Z" fill="white" />
    <rect
      x="50.625"
      y="39.9795"
      width="5.32226"
      height="16.8538"
      fill="white"
    />
    <rect
      x="63.9316"
      y="34.6582"
      width="5.32226"
      height="27.4983"
      fill="white"
    />
  </svg>
);

export const SecurityIcon2: React.FC<IconSvgProps> = ({
  size = 81,
  width,
  height,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || size}
    height={height || size}
    viewBox="0 0 81 80"
    fill="none"
    {...props}
  >
    <rect
      x="12.2949"
      y="45.4633"
      width="5.32226"
      height="17.6471"
      transform="rotate(-43.8934 12.2949 45.4633)"
      fill="white"
    />
    <rect
      x="12.2949"
      y="37.3383"
      width="5.32226"
      height="7.98339"
      fill="white"
    />
    <rect
      x="24.8281"
      y="24.9203"
      width="5.32226"
      height="17.6471"
      transform="rotate(45.247 24.8281 24.9203)"
      fill="white"
    />
    <path
      d="M49.7949 30.8988L53.5421 34.6784L35.5574 52.657L31.8102 48.8774L49.7949 30.8988Z"
      fill="white"
    />
    <rect
      width="5.32226"
      height="17.6471"
      transform="matrix(-0.720631 -0.693319 -0.693319 0.720631 71.6719 45.4633)"
      fill="white"
    />
    <rect
      width="5.32226"
      height="7.98339"
      transform="matrix(-1 0 0 1 71.6719 37.3383)"
      fill="white"
    />
    <rect
      width="5.32226"
      height="17.6471"
      transform="matrix(-0.704052 0.710148 0.710148 0.704052 59.1387 24.9203)"
      fill="white"
    />
  </svg>
);

export const SecurityIcon3: React.FC<IconSvgProps> = ({
  size = 91,
  width,
  height,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || size}
    height={height || size}
    viewBox="0 0 91 90"
    fill="none"
    {...props}
  >
    <rect x="21.2988" y="22.0008" width="5" height="36" fill={color} />
    <rect x="64.2988" y="22.0008" width="5" height="36" fill={color} />
    <path
      d="M54.5 35.0008L57.952 38.4827L46.8186 49.6571L43.3666 46.1752L54.5 35.0008Z"
      fill={color}
    />
    <path
      d="M47.0703 49.3445L43.6328 52.8407L34.3249 43.8247L37.7624 40.3286L47.0703 49.3445Z"
      fill={color}
    />
    <rect
      width="5"
      height="25.7437"
      transform="matrix(-0.647635 0.761951 0.761951 0.647635 24.5391 54.0008)"
      fill={color}
    />
    <rect
      x="65.9141"
      y="54.0008"
      width="5"
      height="25.7437"
      transform="rotate(49.6365 65.9141 54.0008)"
      fill={color}
    />
    <path
      d="M49.2852 74.5067L49.2571 69.5067L40.8004 69.4999L40.8285 74.4999L49.2852 74.5067Z"
      fill={color}
    />
    <rect
      width="5"
      height="38"
      transform="matrix(0 1 1 0 26.2988 17.0008)"
      fill={color}
    />
  </svg>
);

export const AboutIcon1: React.FC<IconSvgProps> = ({
  size = 46,
  width,
  height,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || size}
    height={height || size}
    viewBox="0 0 46 47"
    fill="none"
  >
    <rect
      x="27.2344"
      y="1.4032"
      width="6.64438"
      height="18.1443"
      fill={color}
    />
    <rect
      x="0.145508"
      y="14.6919"
      width="6.64438"
      height="18.1443"
      fill={color}
    />
    <rect
      x="36.9443"
      y="2.42493"
      width="6.64438"
      height="6.89993"
      fill={color}
    />
    <rect
      x="39.2441"
      y="26.1918"
      width="6.64438"
      height="6.89993"
      fill={color}
    />
    <rect
      x="32.6006"
      y="33.0913"
      width="6.64438"
      height="6.89993"
      fill={color}
    />
    <rect
      x="6.78906"
      y="33.0913"
      width="6.64438"
      height="6.89993"
      fill={color}
    />
    <rect
      x="6.78906"
      y="7.79126"
      width="6.64438"
      height="6.89993"
      fill={color}
    />
    <rect
      x="13.4355"
      y="0.891846"
      width="6.64438"
      height="6.89993"
      fill={color}
    />
    <rect
      x="27.2344"
      y="12.6475"
      width="16.3554"
      height="6.89993"
      fill={color}
    />
    <rect
      x="13.4355"
      y="39.9919"
      width="19.1665"
      height="6.89993"
      fill={color}
    />
  </svg>
);

export const AboutIcon2: React.FC<IconSvgProps> = ({
  size = 55,
  width,
  height,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || size}
    height={height || size}
    viewBox="0 0 55 55"
    fill="none"
  >
    <rect x="34.1855" y="6.29028" width="7.2" height="7.2" fill={color} />
    <rect x="40.4902" y="11.6926" width="7.2" height="7.2" fill={color} />
    <rect x="38.6855" y="35.9934" width="7.2" height="7.2" fill={color} />
    <rect x="26.0918" y="23.3918" width="7.2" height="7.2" fill={color} />
    <rect x="45.8887" y="17.9934" width="7.2" height="18" fill={color} />
    <rect
      width="18.9"
      height="7.2"
      transform="matrix(-1 0 0 1 39.5918 45.8918)"
      fill={color}
    />
    <rect
      width="18"
      height="7.2"
      transform="matrix(-1 0 0 1 35.9902 6.29028)"
      fill={color}
    />
    <rect
      width="7.2"
      height="7.2"
      transform="matrix(-1 0 0 1 18.8887 11.6926)"
      fill={color}
    />
    <rect
      width="7.2"
      height="7.2"
      transform="matrix(-1 0 0 1 20.6855 35.9934)"
      fill={color}
    />
    <rect
      width="7.2"
      height="18"
      transform="matrix(-1 0 0 1 13.4902 17.9934)"
      fill={color}
    />
  </svg>
);

export const AboutIcon3: React.FC<IconSvgProps> = ({
  size = 55,
  width,
  height,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || size}
    height={height || size}
    viewBox="0 0 45 46"
    fill="none"
  >
    <rect x="0.888672" y="7.3728" width="7" height="21" fill={color} />
    <rect x="36.8887" y="7.3728" width="7" height="21" fill={color} />
    <rect x="7.88867" y="0.372803" width="30" height="7" fill={color} />
    <rect x="14.8887" y="38.3728" width="16" height="7" fill={color} />
    <path
      d="M25.4529 40.9644L38.9658 23.3733L44.4028 27.7823L30.8898 45.3734L25.4529 40.9644Z"
      fill={color}
    />
    <path
      d="M20.3369 40.9647L6.40109 23.8737L0.964143 28.2828L14.9 45.3738L20.3369 40.9647Z"
      fill={color}
    />
    <path
      d="M27.335 12.3728L30.7869 15.8547L19.5381 27.3728L16.0861 23.8909L27.335 12.3728Z"
      fill={color}
    />
    <path
      d="M30.402 23.8735L26.9645 27.3696L15.4943 15.9366L18.9318 12.4405L30.402 23.8735Z"
      fill={color}
    />
  </svg>
);

export const AboutIcon4: React.FC<IconSvgProps> = ({
  size = 55,
  width,
  height,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || size}
    height={height || size}
    viewBox="0 0 47 103"
    fill="none"
  >
    <rect
      width="17.5238"
      height="17.5238"
      transform="matrix(-1 0 0 1 46.5 85.4286)"
      fill={color}
    />
    <rect
      width="17.5238"
      height="17.5238"
      transform="matrix(-1 0 0 1 46.5 0)"
      fill={color}
    />
    <rect
      width="17.5238"
      height="17.5238"
      transform="matrix(-1 0 0 1 31.167 70.0953)"
      fill={color}
    />
    <rect
      width="17.5238"
      height="17.5238"
      transform="matrix(-1 0 0 1 31.167 13.1429)"
      fill={color}
    />
    <rect
      width="18"
      height="26"
      transform="matrix(-1 0 0 1 18.5 56.9524)"
      fill={color}
    />
    <rect
      width="18"
      height="41"
      transform="matrix(-1 0 0 1 18.5 17.9524)"
      fill={color}
    />
  </svg>
);
