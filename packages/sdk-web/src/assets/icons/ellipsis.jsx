import { h } from 'preact'

const IconTyping = ({ fill = '#246FC5' }) => (
<svg width="80px"  height="80px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" 
class="lds-ellipsis" style="background: none;">
    <circle cx="84" cy="50" r="0" fill="#99dff2">
      <animate attributeName="r" values="12;0;0;0;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="0s"></animate>
        <animate attributeName="cx" values="84;84;84;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="0s"></animate>
    </circle>
    <circle cx="84" cy="50" r="0.690111" fill="#246fc5">
      <animate attributeName="r" values="0;12;12;12;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="-1s"></animate>
        <animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="-1s"></animate>
    </circle>
    <circle cx="82.0447" cy="50" r="12" fill="#99dff2">
      <animate attributeName="r" values="0;12;12;12;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="-0.5s"></animate>
        <animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="-0.5s"></animate>
    </circle>
    <circle cx="48.0447" cy="50" r="12" fill="#246fc5">
      <animate attributeName="r" values="0;12;12;12;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="0s"></animate>
        <animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="0s"></animate>
    </circle><circle cx="16" cy="50" r="11.3099" fill="#99dff2">
      <animate attributeName="r" values="0;0;12;12;12" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="0s"></animate>
        <animate attributeName="cx" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="0s"></animate>
    </circle>
  </svg>
)

export default IconTyping
