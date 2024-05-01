import { Routes } from "@/constants";
import NavLink from "./Nav";

export default function Header() {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <NavLink href={Routes.HOME}>HOME</NavLink>
      <NavLink href={Routes.ADMIN}>DASHBOARD</NavLink>
      <NavLink href={Routes.ADMIN + Routes.ADDPRODACT}>ADD PRODUCT</NavLink>
      <NavLink href={Routes.ADMIN + Routes.LISTPRODACT + Routes.ALL}>
        LIST PRODUCTS
      </NavLink>
      <NavLink href={Routes.ADMIN + Routes.USERS}>USERS</NavLink>
    </div>
  );
}
