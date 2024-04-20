import { useContext } from "react";
import { TablularData } from "../component/Table";
import { WineDataContext } from "../context/wineDataContext";

function Statistics() {
  const { flavanoidsDataTable, gammaDataTable } = useContext(WineDataContext);
  return (
    <div>
      <TablularData data={flavanoidsDataTable} />

      <TablularData data={gammaDataTable} />
    </div>
  );
}

export default Statistics;
