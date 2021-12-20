import "./styles.scss";
import { CURSORS } from "../../data/cursors";
import { ProgressBar } from "../simpleComponents/progressBar/ProgressBar";
import { QuestData } from "../../data/quest";

interface QuestProps {
  name: string;
  progress: number;
}

export default function Quest(props: QuestProps) {
  const { name, progress } = props;

  return (
    <div>
      <div className="quest">
        <img
          // @ts-ignore
          src={QuestData[name].icon}
          style={{
            cursor: CURSORS.pointer.src,
          }}
          alt=""
          className="questIcon"
        />
        <div className="questDetails">
          <div className="questName">
            {
              // @ts-ignore
              QuestData[name].description
            }
          </div>
          <div className="questPercent">
            <ProgressBar
              // @ts-ignore
              percent={`${(progress / QuestData[name].required).toFixed(1)}`}
              // @ts-ignore
              label={`${progress}/${QuestData[name].required}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
