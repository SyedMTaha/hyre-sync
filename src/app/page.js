import Image from "next/image";
import SignIn from "./auth/signin";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <SignIn />
    </>
  );
}
