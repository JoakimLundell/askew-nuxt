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
      d="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z"
    >
      <animate
        fill="freeze"
        attributeName="d"
        begin="0.6s"
        dur="0.2s"
        values="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z;M5 15.5c1 1 2.5 2 4 2.5c-2 2 -5 3 -7 3c2 -2 3 -3.5 3 -5.5Z"
      ></animate>
      <set
        fill="freeze"
        attributeName="fill-opacity"
        begin="0.6s"
        to="1"
      ></set>
    </path>
    <path
      fill="none"
      stroke="currentColor"
      stroke-dasharray="56"
      stroke-dashoffset="56"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M7 16.82c-2.41 -1.25 -4 -3.39 -4 -5.82c0 -3.87 4.03 -7 9 -7c4.97 0 9 3.13 9 7c0 3.87 -4.03 7 -9 7c-1.85 0 -3.57 -0.43 -5 -1.18Z"
    >
      <animate
        fill="freeze"
        attributeName="stroke-dashoffset"
        dur="0.6s"
        values="56;0"
      ></animate>
    </path>
  </svg>
</template>

<script>
export default {
  name: "LineMdChatRound",
};
</script>
