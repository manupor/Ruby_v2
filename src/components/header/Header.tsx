import Image from "next/image";

function Header() {
  return (
    <header>
      <div>
        <a>
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Ruby Wager Logo"
            width={16}
            height={16}
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
