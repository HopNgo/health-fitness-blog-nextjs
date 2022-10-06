import { } from "react";
import HeaderDesktop from "./headerDesktop";
import HeaderMobile from "./headerMobile";


export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
}
