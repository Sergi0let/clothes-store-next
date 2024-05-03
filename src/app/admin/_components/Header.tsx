import { Routes } from "@/constants";
import NavLink from "./Nav";

export default function Header() {
  return (
    <div className="navbar bg-neutral  p-6 text-neutral-content">
      <div className="m-auto max-w-7xl">
        <NavLink href={Routes.HOME}>HOME</NavLink>
        <NavLink href={Routes.ADMIN}>DASHBOARD</NavLink>
        <NavLink href={Routes.ADMIN + Routes.ADDPRODACT}>ADD PRODUCT</NavLink>
        <NavLink href={Routes.ADMIN + Routes.LISTPRODACT + Routes.ALL}>
          LIST PRODUCTS
        </NavLink>
        <NavLink href={Routes.ADMIN + Routes.USERS}>USERS</NavLink>
      </div>
    </div>
  );
}
