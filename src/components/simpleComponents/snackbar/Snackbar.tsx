import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import "./Snackbar.scss";
interface SnackbarProps {}
export default function Snackbar(props: SnackbarProps) {
  const errorMessage = useSelector((state: RootState) => state.errorMessage);
  const [visible, setVisible] = useState(false);
  React.useEffect(() => {
    setVisible(errorMessage.display);
    setTimeout(() => setVisible(false), 1000);
  }, [errorMessage]);

  return (
    <>
      {visible && (
        <div className="snackBar">
          <p>{errorMessage.message} </p>
        </div>
      )}
    </>
  );
}
