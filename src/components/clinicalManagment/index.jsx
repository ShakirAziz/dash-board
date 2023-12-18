import DyanimContent from "../dynamicDashboardContent";
import { titlesAndDescriptions, tabs } from "../addUser/addUser";
import "./style.css";
const ClinicalManagment = () => {
  return (
    <>
      <DyanimContent
        titlesAndDescriptions={titlesAndDescriptions}
        tabs={tabs}
      />
    </>
  );
};
export default ClinicalManagment;
