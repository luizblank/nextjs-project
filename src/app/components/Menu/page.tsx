import { Routes } from "@/app/constants/routes";
import Link from "next/link";

interface IMenu {
    op1: string;
    op2: string;
    op3: string;
    op4?: string; // ? deixa a prop opcional
}

export const Menu= ({op1, op2, op3, op4} : IMenu ) => {
  return (
    <nav>
      <Link href={Routes.home}>{op1}</Link>
      <Link href={Routes.hookpage}>{op2}</Link>
    </nav>
  )
}

export default Menu;