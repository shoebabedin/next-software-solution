
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Preloader from "../Preloader/Preloader";
import ToTop from "../ToTop/ToTop";

const Layout = ({children}) => {
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      setLoading(false);
      const styleLoading = {};
    }; 
    fetchData();
  }, [title]);

  

      
    return (
      <>
        <main id="main"  className={`${loading && "overflow-hidden"}`}>
            {loading &&  <Preloader/>}
            <Navbar />
            <section id="page_content" className="content">
              {children}
            </section>
            <Footer/>
            <ToTop/>
        </main>
      </>
    );
};

export default Layout;