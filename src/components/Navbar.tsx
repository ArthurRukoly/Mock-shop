import ButtonSection from "./ButtonSection";
import NavButton from "./NavButton";

export default function Navbar() {
  return (
    <div className="fixed z-10 bg-white flex w-screen py-7 max-w-[1920px]">
      <ButtonSection type="title">
        <h1 className="font-bold text-3xl">Furniro</h1>
      </ButtonSection>
      <ButtonSection>
        <NavButton>Home</NavButton>
        <NavButton>Shop</NavButton>
        <NavButton>About</NavButton>
        <NavButton>Contact</NavButton>
      </ButtonSection>
      <ButtonSection>
        <div className="flex w-[60%] justify-around">
          <NavButton>1</NavButton>
          <NavButton>2</NavButton>
          <NavButton>3</NavButton>
          <NavButton>4</NavButton>
        </div>
      </ButtonSection>
    </div>
  );
}
