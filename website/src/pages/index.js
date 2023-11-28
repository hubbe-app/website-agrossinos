import Wrapper from "../layout/wrapper";
import Insurance from "./home/insurance";
import { fetchPage, fetchGlobalSettings, fetchBlock } from 'hubbe-aio-ws/dist'
import PersonalPortfolio from "./home/personal-portfolio";

export const getServerSideProps = async () => {

  const globalSettings = await fetchGlobalSettings();

  const pageObject = await fetchPage('home');

  const blockHero = await fetchBlock('home', 'hero');

  return { props: { pageObject, globalSettings, blockHero } }
}

const MainRoot = ({ pageObject, globalSettings, blockHero }) => {
  return (
    <Wrapper>
      <PersonalPortfolio pageObject={pageObject} globalSettings={globalSettings} blockHero={blockHero}/>
    </Wrapper> 
  );
};

export default MainRoot;
