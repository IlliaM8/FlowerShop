import { FC, useState } from "react";
import glass from "./assets/glass.svg";
import s from "./SearchInput.module.scss";
interface SearchInputProps {}

const SearchInput: FC<SearchInputProps> = () => {
  const [isFocus, setFocus] = useState(false);
  const rootClasse = [s.underline];
  const crossRoot = [s.cross];
  if (isFocus) {
    rootClasse.push(s.focus);
    crossRoot.push(s.focus);
  }
  return (
    <div className={s.searchInput}>
      <img src={glass} alt="glass" />
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder="поиск"
        className={s.searchInput__input}
        type="text"
      />
      <div className={rootClasse.join(" ")}></div>
      <div className={crossRoot.join(" ")}></div>
    </div>
  );
};

export default SearchInput;
