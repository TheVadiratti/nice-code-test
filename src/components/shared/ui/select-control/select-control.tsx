import {
  memo,
  useState,
  useCallback,
  MouseEventHandler,
  // ChangeEventHandler,
} from "react";
import Styles from "./select-control.module.scss";
import CountValue from "../count-value/count-value";
import ButtonText from "../button-text/button-text";
import Checkbox from "../checkbox/checkbox";

interface Props {
  // FIXME onActionsClick пока что необязателен, чтобы не было ошибки
  onActionsClick?: MouseEventHandler<HTMLButtonElement>;
  // TODO onChangeCheckbox нужно добавить
  // onChangeCheckbox: ChangeEventHandler<HTMLInputElement>;
}

const SelectControl = memo(({ onActionsClick }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className={Styles.cnt}>
      <div className={Styles.leftItems}>
        {isOpen && (
          <>
            <Checkbox htmlFor="select-all" isChecked onChange={() => {}} />
            <p className={Styles.text}>Все</p>
          </>
        )}

        <CountValue value={213} />
      </div>
      <div className={Styles.rightItems}>
        {isOpen ? (
          <>
            <ButtonText
              type="button"
              label="Действия"
              onClick={onActionsClick}
            />
            <ButtonText type="button" label="Отменить" onClick={handleClose} />
          </>
        ) : (
          <ButtonText type="button" label="Выбрать" onClick={handleOpen} />
        )}
      </div>
    </div>
  );
});

export default SelectControl;
