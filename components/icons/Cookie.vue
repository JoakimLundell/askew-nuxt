<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <!-- Icon from Material Line Icons by Vjacheslav Trushkin - https://github.com/cyberalien/line-md/blob/master/license.txt -->
    <g
      fill="currentColor"
      fillOpacity="0"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <path
        stroke-dasharray="56"
        stroke-dashoffset="56"
        d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"
      >
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.7s"
          dur="0.15s"
          values="0;0.3"
        ></animate>
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.6s"
          values="56;0"
        ></animate>
      </path>
      <g stroke="none">
        <circle
          cx="9.5"
          cy="7.5"
          r="1.5"
        >
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.9s"
            dur="0.2s"
            values="0;1"
          ></animate>
        </circle>
        <circle
          cx="11"
          cy="17.5"
          r="1.5"
        >
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="1s"
            dur="0.2s"
            values="0;1"
          ></animate>
        </circle>
        <circle
          cx="6.5"
          cy="11.5"
          r="1.5"
        >
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="1.1s"
            dur="0.2s"
            values="0;1"
          ></animate>
        </circle>
        <circle
          cx="16.5"
          cy="14.5"
          r="1.5"
        >
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="1.2s"
            dur="0.2s"
            values="0;1"
          ></animate>
        </circle>
        <circle
          cx="11.5"
          cy="12.5"
          r="1.5"
        >
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="1.3s"
            dur="0.2s"
            values="0;1"
          ></animate>
        </circle>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "LineMdCookieTwotone",
};
</script>
