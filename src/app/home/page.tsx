import { Metadata } from "next";
import HookPage from "../hook-page/page";

export const metadata: Metadata = {
  title: "Home",
  description: "This is a next project", // descrição da página na internet
};

const Home = () => {
  return (
    <>
      <HookPage/>
    </>
  );
}

export default Home;