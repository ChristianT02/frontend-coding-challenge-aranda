import BannerHome from "../Banner/Home";
import Footer from "../Footer";
import Header from "../Header";
import MenuMobile from "../Menu/Mobile";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>
        <BannerHome />
        <MenuMobile />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
