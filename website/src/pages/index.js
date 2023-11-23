import Wrapper from "../layout/wrapper";
import Insurance from "./home/insurance";
import { fetchPage, fetchGlobalSettings } from 'hubbe-aio-ws/dist'

export const getServerSideProps = async () => {
  const globalSettings = await fetchGlobalSettings();
  const pageObject = await fetchPage('home');
  return { props: { pageObject, globalSettings } }
}

const MainRoot = ({ pageObject, globalSettings }) => {
  return (
    <Wrapper>
      <Insurance pageObject={pageObject} globalSettings={globalSettings} />
    </Wrapper>
  );
};

export default MainRoot;
