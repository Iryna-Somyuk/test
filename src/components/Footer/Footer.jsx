import { AiOutlineCopyrightCircle } from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer className="container py-4 bg-white space-x-5 justify-between items-center border-t-2 border-slate-400">
      <span className="text-gray-dark text-xs flex justify-center items-center">
        2023{'  '}
        <AiOutlineCopyrightCircle size={15} />
        {'  '}All rights reserved. Developed by I. Somyuk | GoIT
      </span>
    </footer>
  );
};
