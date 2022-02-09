export const Lightning = () => {
  return <button className="flex group flex-col items-center">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
  <p className="opacity-0 group-hover:opacity-100 min-w-[50px] text-xs">
    Lightning
  </p>
  </button>
};
