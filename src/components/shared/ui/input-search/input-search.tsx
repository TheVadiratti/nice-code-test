import {
  memo,
  useState,
  useCallback,
  useRef,
  useEffect,
  ChangeEventHandler,
  MouseEventHandler,
} from "react";
import ButtonRound from "@/components/shared/ui/button-round/button-round";
import LoupeIcon from "@/components/shared/ui/_icons/loupe";
import PlusIcon from "@/components/shared/ui/_icons/plus";
import FilterIcon from "@/components/shared/ui/_icons/filter";
import CloseIcon from "@/components/shared/ui/_icons/close";
import Styles from "./input-search.module.scss";

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  // FIXME onPlusClick и onFilterClick пока что необязательные, чтобы не было ошибки
  onPlusClick?: MouseEventHandler<HTMLButtonElement>;
  onFilterClick?: MouseEventHandler<HTMLButtonElement>;
}

const InputSearchPatients = memo(
  ({ value, onChange, placeholder, onPlusClick, onFilterClick }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, [isOpen]);

    const handleOpenInput = useCallback(() => {
      setIsOpen(true);
    }, []);
    const handleCloseInput = useCallback(() => {
      setIsOpen(false);
    }, []);

    return (
      <div className={Styles.cnt}>
        {isOpen ? (
          <div className={Styles.inputCnt}>
            <LoupeIcon />
            <input
              className={Styles.input}
              type="text"
              onChange={onChange}
              value={value}
              placeholder={placeholder}
              ref={inputRef}
            />
          </div>
        ) : (
          <ButtonRound
            type="button"
            ariaLabel="Открыть поиск пациентов"
            icon={LoupeIcon()}
            onClick={handleOpenInput}
          />
        )}
        <div className={Styles.buttonsCnt}>
          {isOpen ? (
            <ButtonRound
              type="button"
              ariaLabel="Закрыть поиск пациентов"
              icon={CloseIcon()}
              onClick={handleCloseInput}
            />
          ) : (
            <>
              <ButtonRound
                type="button"
                ariaLabel="Фильтр"
                icon={FilterIcon()}
                hint="Фильтр"
                onClick={onFilterClick}
              />
              <ButtonRound
                type="button"
                ariaLabel="Новый пациент"
                icon={PlusIcon()}
                onClick={onPlusClick}
                hint="Новый пациент"
              />
            </>
          )}
        </div>
      </div>
    );
  },
);

export default InputSearchPatients;
