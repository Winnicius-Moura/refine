import type { SVGProps } from "react";

export const NoTimeOffIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={82}
    height={82}
    viewBox="0 0 82 82"
    fill="none"
    {...props}
  >
    <circle cx={40} cy={42} r={40} fill="#F1F5F9" />
    <circle
      cx={40}
      cy={42}
      r={19.5}
      fill="url(#no-time-off-a)"
      stroke="#94A3B8"
    />
    <path
      stroke="#94A3B8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M40 34v8l3 3"
    />
    <path
      fill="url(#no-time-off-b)"
      stroke="#F1F5F9"
      strokeWidth={2}
      d="m53.337 61.177 2.229-1.204.078-.042c1.57-.848 2.853-1.54 3.734-2.21C60.288 57.028 61 56.188 61 55c0-1.188-.711-2.028-1.622-2.72-.88-.67-2.164-1.364-3.734-2.211l-.078-.042-2.229-1.204-.065-.035c-1.201-.649-2.186-1.18-2.946-1.48-.388-.154-.794-.278-1.19-.303-.42-.027-.883.057-1.28.381-.679.554-.879 1.317-.854 2.013.023.663.247 1.335.497 1.913.255.591.575 1.164.853 1.64.105.18.2.338.283.479.156.26.275.46.356.618.256.499.316.755.317.946 0 .191-.058.45-.317.956-.081.158-.2.358-.356.618l-.283.478a15.56 15.56 0 0 0-.853 1.64c-.25.579-.474 1.25-.497 1.914-.025.696.175 1.459.853 2.013.398.324.862.408 1.282.381.395-.025.8-.15 1.19-.303.759-.3 1.744-.831 2.945-1.48l.065-.035Z"
    />
    <path
      fill="url(#no-time-off-c)"
      stroke="#94A3B8"
      d="m54.853 51.347-2.228-1.204c-1.27-.685-2.18-1.176-2.85-1.44-.333-.132-.569-.19-.734-.201-.153-.01-.209.023-.237.046l6.05 2.799Zm0 0c1.652.892 2.837 1.533 3.617 2.126.772.587 1.03 1.04 1.03 1.527 0 .488-.258.94-1.03 1.527-.78.593-1.965 1.234-3.617 2.126m0-7.306v7.306m0 0-2.228 1.204m2.228-1.204-2.228 1.204m0 0c-1.27.685-2.18 1.176-2.85 1.44-.333.131-.569.19-.734.201-.153.01-.209-.023-.237-.046-.216-.176-.316-.427-.303-.798.014-.388.153-.859.375-1.371.218-.506.501-1.017.771-1.479l.242-.407c.174-.293.333-.56.436-.761m2.3 3.22-3.821-11.308c-.216.176-.316.427-.303.798.014.388.153.859.375 1.371.218.506.501 1.016.771 1.478.081.139.163.276.242.408.174.292.333.56.436.761m0 3.272-.444-.229.444.229Zm0 0c.302-.588.484-1.101.483-1.645-.002-.544-.187-1.052-.483-1.627m0 0-.444.229.444-.229Z"
    />
    <rect width={26} height={26} x={55} y={1} fill="#E2E8F0" rx={13} />
    <rect
      width={26}
      height={26}
      x={55}
      y={1}
      stroke="#fff"
      strokeWidth={2}
      rx={13}
    />
    <path
      fill="#94A3B8"
      d="M68 20.16c-.856 0-1.585-.234-2.188-.7-.602-.47-1.062-1.15-1.38-2.04-.318-.894-.477-1.973-.477-3.238 0-1.258.159-2.332.477-3.222.322-.894.784-1.576 1.386-2.045.606-.474 1.334-.71 2.182-.71.849 0 1.574.236 2.176.71.606.47 1.068 1.151 1.386 2.045.323.89.484 1.964.484 3.222 0 1.265-.16 2.344-.478 3.239-.318.89-.778 1.57-1.38 2.04-.603.465-1.332.698-2.188.698Zm0-1.25c.849 0 1.508-.41 1.977-1.228.47-.818.705-1.985.705-3.5 0-1.008-.108-1.866-.324-2.574-.212-.708-.519-1.248-.92-1.62A2.032 2.032 0 0 0 68 9.433c-.84 0-1.498.415-1.972 1.244-.473.826-.71 1.995-.71 3.506 0 1.007.106 1.864.318 2.568.213.704.517 1.24.915 1.608.402.367.885.551 1.449.551Z"
    />
    <defs>
      <linearGradient
        id="no-time-off-a"
        x1={40}
        x2={40}
        y1={22}
        y2={62}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CBD5E1" />
        <stop offset={1} stopColor="#F1F5F9" />
      </linearGradient>
      <linearGradient
        id="no-time-off-b"
        x1={54}
        x2={54}
        y1={48}
        y2={62}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CFD8DC" />
        <stop offset={1} stopColor="#ECEFF1" />
      </linearGradient>
      <linearGradient
        id="no-time-off-c"
        x1={54}
        x2={54}
        y1={48}
        y2={62}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CBD5E1" />
        <stop offset={1} stopColor="#F1F5F9" />
      </linearGradient>
    </defs>
  </svg>
);
