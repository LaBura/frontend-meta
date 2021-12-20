import "./styles.scss";
import { useRef } from "react";
import { CURSORS } from "../../data/cursors";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { changeAvatar as changeAvatarApi } from "../../api/user";
import { changeAvatar } from "../../redux/actions";
import userAvatar from "../../assets/userAvatar.png";
export default function Avatar() {
  const avatar = useSelector((state: RootState) => state.avatar);
  const dispatch = useDispatch();
  const ref = useRef();
  function getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  const onUpload = async (newAvatar: any) => {
    newAvatar = await getBase64(newAvatar);
    changeAvatarApi(newAvatar)
      .then((data: any) => {
        dispatch(changeAvatar(newAvatar));
      })
      .catch((err: any) => {});
  };
  const onClick = () => {
    // @ts-ignore
    ref.current.click();
  };
  return (
    <>
      <img
        src={avatar !== "" ? avatar : userAvatar}
        style={{
          cursor: CURSORS.pointer.src,
        }}
        onClick={onClick}
        alt=""
        className="userAvatar"
      />
      <input
        onChange={async (event) =>
          // @ts-ignore
          await onUpload(event.target.files[0])
        }
        // @ts-ignore
        ref={ref}
        type="file"
        name="avatar"
        accept="image/png, image/jpeg"
        className="avatarUpload"
      />
    </>
  );
}
