import { useAppContext } from "../context/AppContext";

const DashboardPage = () => {
  const { infoState } = useAppContext();

  const data =
    infoState &&
    infoState.array &&
    infoState.array.map((item, index) => {
      return { index: index, number: item };
    });
  return <>Dashboard</>;
};
export default DashboardPage;
