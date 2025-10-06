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

export const ArrowRightIcon: React.FC<IconSvgProps> = ({
  color = "white",
}) => (
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
    <rect x="24.5723" y="71.6289" width="8.75" height="8.75" transform="rotate(-46.8706 24.5723 71.6289)" fill={color}/>
    <rect x="32.9512" y="62.6836" width="8.75" height="8.75" transform="rotate(-46.8706 32.9512 62.6836)" fill={color}/>
    <rect x="41.3301" y="53.7402" width="8.75" height="8.75" transform="rotate(-46.8706 41.3301 53.7402)" fill={color}/>
    <rect x="49.7109" y="44.793" width="8.75" height="8.75" transform="rotate(-46.8706 49.7109 44.793)" fill={color}/>
    <rect x="49.1953" y="27.5137" width="8.75" height="8.75" transform="rotate(-46.8706 49.1953 27.5137)" fill={color}/>
    <rect width="8.75" height="8.75" transform="matrix(-0.683648 0.729812 0.729812 0.683648 73.334 54.9336)" fill={color}/>
    <rect x="32.0703" y="28.2676" width="8.75" height="8.75" transform="rotate(-46.8706 32.0703 28.2676)" fill={color}/>
    <rect width="8.75" height="8.75" transform="matrix(-0.683648 0.729812 0.729812 0.683648 72.9609 37.7891)" fill={color}/>
    <rect x="58.0898" y="35.8477" width="8.75" height="8.75" transform="rotate(-46.8706 58.0898 35.8477)" fill={color}/>
    <rect x="66.4688" y="26.9023" width="8.75" height="8.75" transform="rotate(-46.8706 66.4688 26.9023)" fill={color}/>
  </svg>
);