import Button from "../button/Button";
import "./Dialog.scss";
interface DialogProps {
  onClose: Function;
  onAccept: Function;
  visible: boolean;
  message: string;
  price: number;
}
export default function Dialog(props: DialogProps) {
  const { onClose, visible, message, price, onAccept } = props;

  return (
    <>
      {visible && (
        <div
          className="dialogDimmer"
          onClick={() => {
            onClose();
          }}
        >
          <div className="dialog">
            <p>{message} </p>
            <Button
              label={`${price} FFT`}
              onClick={(e: any) => {
                onAccept();
                e.stopPropagation();
              }}
              style={{
                color: "black",
              }}
              loading={false}
            />
          </div>
        </div>
      )}
    </>
  );
}
