import ClientHeader from "../../components/Client/Header";
import { Outlet } from "react-router-dom";
function ClienRoot() {
  return (
    <>
    <ClientHeader/>
    <Outlet/>
    </>
  )
}

export default ClienRoot;
