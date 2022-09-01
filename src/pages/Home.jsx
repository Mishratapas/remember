import {useSelector} from "react-redux";

import Navbar from "../components/Navbar";
import Data from "../components/Data";

const Home = () => {
  const data = useSelector((state) => state.data);

  return (
    <>
      <Navbar />
      <Data data={data} />
    </>
  );
};

export default Home;
