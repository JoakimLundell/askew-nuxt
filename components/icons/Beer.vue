<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <!-- Icon from Material Line Icons by Vjacheslav Trushkin - https://github.com/cyberalien/line-md/blob/master/license.txt -->
    <path
      fill="currentColor"
      fillOpacity="0"
      d="M17 8L16 21H7L6 8z"
    >
      <animate
        fill="freeze"
        attributeName="fill-opacity"
        begin="0.9s"
        dur="0.15s"
        values="0;0.3"
      ></animate>
    </path>
    <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <path
        stroke-dasharray="64"
        stroke-dashoffset="64"
        d="M18 3l-2 18h-9l-2 -18Z"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.6s"
          values="64;0"
        ></animate>
      </path>
      <path
        stroke-dasharray="14"
        stroke-dashoffset="14"
        d="M6 7.67c0.6 -0.37 1.22 -0.67 2 -0.67c2 0 3 2 5 2c1.64 0 2.6 -1.34 4 -1.83"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.7s"
          dur="0.2s"
          values="14;0"
        ></animate>
      </path>
    </g>
  </svg>
</template>

<script>
export default {
  name: "LineMdBeerTwotone",
};
</script>
