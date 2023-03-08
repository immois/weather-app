import Link from "next/link";
import style from "./back.module.css";

export const Back = () => {
  return (
    <>
      <Link className={style.back} href={"/"}>
        Regresar
      </Link>
    </>
  );
};
