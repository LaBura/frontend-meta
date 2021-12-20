import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
interface TextInputProps {
  value: string;
  onChange: Function;
  type: string;
  className: string;
  disabled: boolean;
  placeholder?: string;
}
export default function TextInput(props: TextInputProps) {
  const { className, disabled, value, onChange, type, placeholder } = props;
  return (
    <div>
      <BrowserView>
        <input
          value={value}
          onChange={(event) => onChange(event)}
          type={type}
          className={className}
          disabled={disabled}
          autoCapitalize="none"
          autoComplete="off"
          placeholder={placeholder ? placeholder : ""}
        />
      </BrowserView>
      <MobileView>
        <input
          value={value}
          onChange={(event) => onChange(event)}
          type={type}
          className={className}
          disabled={disabled}
          onFocus={(event) => {
            // document.body.scrollTop = event.currentTarget.offsetTop;
            window.scrollTo({
              top: event.currentTarget.offsetTop,
              left: 0,
              behavior: "smooth",
            });
          }}
          autoCapitalize="none"
          autoComplete="off"
          onBlur={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
          placeholder={placeholder ? placeholder : ""}
        />
      </MobileView>
    </div>
  );
}
