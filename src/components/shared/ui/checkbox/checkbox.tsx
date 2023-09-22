"use client";

import { memo, ChangeEventHandler } from "react";
import Styles from "./checkbox.module.scss";

interface Props {
  isChecked: boolean;
  htmlFor: string;
  onChange: ChangeEventHandler<HTMLInputElement>; // e.target.checked
}

const Checkbox = memo(({ isChecked, htmlFor, onChange }: Props) => (
  <label
    className={`${Styles.checkbox} ${isChecked && Styles.checkboxChecked}`}
    htmlFor={htmlFor}
  >
    <input
      className={Styles.inputCheckbox}
      type="checkbox"
      onChange={onChange}
      id={htmlFor}
      checked={isChecked}
    />
  </label>
));

export default Checkbox;
