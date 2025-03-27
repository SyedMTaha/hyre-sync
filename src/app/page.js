import Image from "next/image";
import SignIn from "./auth/signin";
import { Link } from "react-router";
import { Landing } from "./main/page";


export default function Home() {
  return (
    <>
      <SignIn />
      {/* <Landing /> */}
      
    </>
  );
}
