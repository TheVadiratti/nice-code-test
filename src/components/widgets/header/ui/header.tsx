import { memo } from "react";
import Styles from "./header.module.scss";

const Header = memo(() => <header className={Styles.header} />);

export default Header;
