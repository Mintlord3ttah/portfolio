import Logo from "./Logo";

export default function Footer() {
  return <footer className="flex flex-col mt-36 gap-3 items-center justify-center border-t border-t-neutral-500 py-4">
    <Logo />
    <a href="https://github.com/Mintlord3ttah" className="text-blue-600 hover:text-amber-600">https://github.com/Mintlord3ttah</a>
    <a href="mailto:mintlordettah@gmail.com" className="text-blue-600 hover:text-amber-600">mintlordettah@gmail.com</a>
    <p>All Rights Reserved &copy; 2025 by Mintlord3ttah</p>
  </footer>
}