import { FC } from "react";

interface BouquetsListProps {
  bouquets: string[];
}

const BouquetsList: FC<BouquetsListProps> = ({ bouquets }) => {
  return (
    <>
      {bouquets.map((str) => (
        <li className="text" key={str}>
          {str}
        </li>
      ))}
    </>
  );
};

export default BouquetsList;
