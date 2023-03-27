import { FC } from "react";

interface CatalogueListProps {
  cotalogue: string[];
}
const CatalogueList: FC<CatalogueListProps> = ({ cotalogue }) => {
  return (
    <>
      {cotalogue.map((str) => (
        <li className="text" key={str}>
          {str}
        </li>
      ))}
    </>
  );
};

export default CatalogueList;
