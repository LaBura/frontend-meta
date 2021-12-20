import * as React from "react";

import "./ProgressBar.scss";
interface ProgressBarProps {
  percent: any;
  label: string;
}
export var ProgressBar = (props: ProgressBarProps) => {
  const [value, setValue] = React.useState(0);
  const { percent, label } = props;
  React.useEffect(() => {
    setValue(percent * 100);
  }, [percent]);

  return (
    <div className={"progressComp"}>
      <div className="progress-div">
        <div className="progressContainerLabel">{label}</div>
        <div className="progressContainerValue">
          <div style={{ width: `${value}%` }} className="progress" />
        </div>
      </div>
    </div>
  );
};
