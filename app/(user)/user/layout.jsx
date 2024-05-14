import Header from "../../components/Common/Header";
import SideBar from "../../components/Common/SideBar";


export default async function RootLayout({
  children,
}) {
  
  return (
    <div>
      <Header  />
      <SideBar  />
      {children}
    </div>
  );
}