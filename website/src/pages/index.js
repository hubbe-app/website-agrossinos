import Wrapper from "../layout/wrapper";
import Insurance from "./home/insurance";
import { fetchPage, fetchGlobalSettings } from 'hubbe-aio-ws/dist'

export const getServerSideProps = async () => {
  const globalSettings = await fetchGlobalSettings();
  console.log(globalSettings);
  
  return { props: {globalSettings } }
}

const MainRoot = ({ globalSettings }) => {
  return (
    <Wrapper>
      <Insurance globalSettings={globalSettings} />
    </Wrapper>
  );
};

export default MainRoot;
