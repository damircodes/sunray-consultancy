import Link from "next/link";

type EmailUsProps = {
  closeModal: () => void;
};

export default function EmailUs({ closeModal }: EmailUsProps) {
  return (
    <Link
      href="/contact"
      className=" flex hover:bg-[#FFDD21] pr-3 w-24 justify-center whitespace-nowrap text-[#FFDD21] py-2 px-2 text-xl rounded italic bg-black hover:text-black font-thin mt-2"
      onClick={closeModal}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
      Email
    </Link>
  );
}
