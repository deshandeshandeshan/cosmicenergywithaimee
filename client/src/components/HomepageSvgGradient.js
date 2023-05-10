const HomepageSvgGradient = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 300">
      <defs>
        <linearGradient
          id="a"
          gradientUnits="objectBoundingBox"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          {/* <stop offset="0" stop-color="red">
            <animate
              attributeName="stop-color"
              values="red"
              dur="20s"
              repeatCount="indefinite"
            ></animate>
          </stop> */}
          <stop offset=".5" stop-color="purple">
            <animate
              attributeName="stop-color"
              values="4A2A93;"
              dur="10s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="1" stop-color="purple">
            <animate
              attributeName="stop-color"
              values="4A2A93"
              dur="10s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <animateTransform
            attributeName="gradientTransform"
            type="rotate"
            from="0 .5 .5"
            to="360 .5 .5"
            dur="10s"
            repeatCount="indefinite"
          />
        </linearGradient>
        <linearGradient
          id="b"
          gradientUnits="objectBoundingBox"
          x1="0"
          y1="1"
          x2="1"
          y2="1"
        >
          <stop offset="0" stop-color="lightPurple">
            <animate
              attributeName="stop-color"
              values="E5D6FC"
              dur="10s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="1" stop-color="E5D6FC" stop-opacity="0">
            <animate
              attributeName="stop-color"
              values="E5D6FC"
              dur="10s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <animateTransform
            attributeName="gradientTransform"
            type="rotate"
            values="360 .5 .5;0 .5 .5"
            class="ignore"
            dur="10s"
            repeatCount="indefinite"
          />
        </linearGradient>
        {/* <linearGradient
          id="c"
          gradientUnits="objectBoundingBox"
          x1="0"
          y1="1"
          x2="1"
          y2="1"
        >
          <stop offset="0" stop-color="lightPurple">
            <animate
              attributeName="stop-color"
              values="20123E"
              dur="10s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="1" stop-color="purple" stop-opacity="0"></stop>
          <animateTransform
            attributeName="gradientTransform"
            type="rotate"
            values="180 .5 .5;0 .5 .5"
            class="ignore"
            dur="10s"
            repeatCount="indefinite"
          />
        </linearGradient> */}
      </defs>
      <rect fill="url(#a)" width="100%" height="100%" />
      <rect fill="url(#b)" width="100%" height="100%" />
      <rect fill="url(#c)" width="100%" height="100%" />
    </svg>
  );
};

export default HomepageSvgGradient;
