import { TextareaHTMLAttributes, useEffect, useRef, useState } from "react";

export default function TextArea({
  className,

  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const InputRef = useRef<HTMLTextAreaElement>(null);
  const [inputHeight, SetInputHeight] = useState(20);
  useEffect(() => {
    if (InputRef?.current?.scrollHeight) {
      SetInputHeight(InputRef.current?.scrollHeight);
    }
    if (props.value == "") {
      SetInputHeight(20);
    }
  }, [props.value]);

  return (
    <textarea
      ref={InputRef}
      rows={1}
      {...props}
      style={{ height: inputHeight + "px" }}
      className={`${className} overflow-y-auto max-h-[20vh] text-gray-700 resize-none text-xs outline-0 border-none`}
    />
  );
}
