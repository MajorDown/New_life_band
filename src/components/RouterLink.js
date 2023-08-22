import { useState } from "react";
import { useRouter } from "next/navigation";

function ActiveLink({ children, href }) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
    router.asPath === href ? setIsActive(true) : setIsActive(false);
  };

  return (
    <a
      href={href}
      onClick={(e) => handleClick(e)}
      className={isActive ? "active" : ""}
    >
      {children}
    </a>
  );
}

export default ActiveLink;
