import HeaderDesktop from "./headerDesktop";
import HeaderMobile from "./headerMobile";

import {} from "react";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
}
