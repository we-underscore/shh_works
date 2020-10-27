import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={59.1} height={59.101} viewBox="0 0 59.1 59.101" {...props}>
      <g data-name="\uADF8\uB8F9 10" fill="#f5f6f7">
        <path
          data-name="\uD328\uC2A4 7"
          d="M29.55 0A29.551 29.551 0 1059.1 29.551 29.584 29.584 0 0029.55 0zm0 57.16a27.609 27.609 0 1127.608-27.607A27.641 27.641 0 0129.55 57.161z"
        />
        <path
          data-name="\uD328\uC2A4 8"
          d="M34.632 28.673l-6.809-4.595c-.716-.483-1.3-.171-1.3.691v9.562c0 .864.586 1.175 1.3.692l6.809-4.594a.986.986 0 000-1.756z"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
