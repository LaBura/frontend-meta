import { useEffect, useState } from "react";
import underBar from "../../assets/quest.png";
import { CURSORS } from "../../data/cursors";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "./styles.scss";
import Quest from "./Quest";
import Button from "../simpleComponents/button/Button";
import { claimQuests, generateQuests } from "../../api/quest";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLevel,
  changeMoney,
  changeQuests,
  questsDone,
} from "../../redux/actions";
import Loading from "../simpleComponents/loader/loading";
import { RootState } from "../../redux/reducers";
interface QuestProps {}
export default function Quests(props: QuestProps) {
  const [open, setopen] = useState(false);
  const [loading, setloading] = useState(true);
  const [sending, setsending] = useState(false);
  const [disabledButton, setdisabledButton] = useState(false);
  const dispatch = useDispatch();
  const quests = useSelector((state: RootState) => state.quests);
  const questHarvested = useSelector((state: RootState) => state.questsDone);

  useEffect(() => {
    if (quests === 0) {
      return;
    }

    setdisabledButton(
      quests.filter((q: any) => q.numberDone < q.required).length > 0
    );
  }, [quests]);

  const getQuestsApi = () => {
    if (open) {
      return;
    }
    setloading(true);
    getQuests()
      .then((data) => {
        dispatch(changeQuests(data.quest));
        dispatch(questsDone(data.questHarvested));
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  };

  const claimQuestsApi = () => {
    async function claimQuestsAsync() {
      return await claimQuests();
    }
    setsending(true);
    claimQuestsAsync()
      .then((user) => {
        dispatch(changeMoney(user.money));
        dispatch(changeLevel({ level: user.level, exp: user.exp }));
        dispatch(questsDone(user.questHarvested));
        setsending(false);
      })
      .catch(() => {
        setsending(false);
      });
  };

  async function getQuests() {
    return await generateQuests();
  }

  const renderQuests = () => {
    if (quests === 0) {
      return <div className="errorQuests">Must have at least one plant </div>;
    }
    return (
      <>
        <div className="questsList">
          {quests.map((q: any, key: any) => (
            <Quest key={key} name={q._id} progress={q.numberDone} />
          ))}
        </div>
        <div
          className={
            !(disabledButton || sending || questHarvested)
              ? "btnClaim"
              : "btnClaim disabled"
          }
        >
          <Button
            label={questHarvested ? "Already Claimed" : "Claim"}
            onClick={() => claimQuestsApi()}
            disable={disabledButton || sending || questHarvested}
            loading={sending}
          />
        </div>
      </>
    );
  };

  return (
    <div title="quests" className="quests">
      <div
        style={{
          display: open ? "block" : "none",
        }}
        className="questsContent"
      >
        {loading ? (
          <Loading />
        ) : (
          <SimpleBar className="simpleBarQuests">{renderQuests()}</SimpleBar>
        )}
      </div>
      <div
        className={!open ? "questsIcon ModalOpen" : "questsIcon ModalClosed"}
        style={{
          cursor: CURSORS.pointer.src,
        }}
        onClick={getQuestsApi}
        title="Daily Quest"
      >
        <img
          src={underBar}
          className="questsIcon"
          onClick={(e) => {
            setopen((open) => !open);
          }}
          width={60}
          alt=""
        />
      </div>
    </div>
  );
}
