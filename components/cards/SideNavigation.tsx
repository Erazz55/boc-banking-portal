
export interface SideNavigationProps {
    classNameName?: string;
  }
  
  export const SideNavigation: React.FC<SideNavigationProps> = (props) => {
    return (
      <>
        <div
      id="view"
      className="h-full w-1/5 flex flex-row bg-red-300"
    >
      <div
        id="sidebar"
        className="bg-black side_navigation md:block shadow-xl px-3  w-full md:w-full lg:w-full overflow-x-hidden transition-transform duration-300 ease-in-out"
        x-show="sidenav"
      >
        <div className="space-y-6 md:space-y-10 mt-10">
          <div id="menu" className="flex flex-col space-y-2">
            <a
              href="/web/dashboard"
              className="text-sm font-medium text-gray-400 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
            >
              <svg
                className="w-6 h-6 fill-current inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <span className="">Dashboard</span>
            </a>
            <a
              href="/web/billPayment"
              className="text-sm font-medium text-gray-400 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <svg
                className="w-6 h-6 fill-current inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                ></path>
              </svg>
              <span className="">Bill Payment</span>
            </a>
          </div>
        </div>
      </div>
     
    </div>
      </>
    );
  };
  