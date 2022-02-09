export const UserIcon = () => {
  return <>
    <button className="flex flex-col group items-center" >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <p className="opacity-0 min-w-[50px] group-hover:opacity-100 text-xs">
            User
        </p>
    </button>
  </>
};
