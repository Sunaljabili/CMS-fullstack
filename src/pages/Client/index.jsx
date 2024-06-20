import { useEffect, useState } from "react";
import ClientHeader from "../../components/Client/Header";
import { Outlet } from "react-router-dom";
import controller from "../../services";
import { endpoints } from "../../services/constants";
function ClienRoot() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    controller.getAll(endpoints.countries).then((resp) => {
      setCountries(resp.data);
    });
  }, []);
  return (
    <>
      <ClientHeader />
      <Outlet context={[countries, setCountries]} />
    </>
  );
}

export default ClienRoot;
