import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
function RootLayout({
  isOpen,
  notification,
  turnoff,
  handleToggle,
  toggleNotification,
}) {
  return (
    <>
      <Navbar
        isOpen={isOpen}
        notification={notification}
        turnoff={turnoff}
        handleToggle={handleToggle}
        toggleNotification={toggleNotification}
      />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default RootLayout;
