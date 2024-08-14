
export default function Header() {
    return (
        <nav className="drawer bg-white sticky top-0 z-50 shadow-md">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                {/* Navbar */}
                <div className="navbar container mx-auto w-full py-0">
                    <div className="flex flex-col w-full">
                        <div className="flex items-center w-full">
                            <div className="flex-none md:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-ghost px-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-6 w-6 stroke-current">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </label>
                            </div>
                            <h2 className="mx-2 flex-1 md:flex-none font-semibold px-2 text-2xl tracking-wider italic text-primary cursor-pointer">Shop<span className="text-black">Ease</span></h2>
                            <div className="flex items-center gap-5 md:hidden">
                                {/* Cart  */}
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
                                    <div className="h-[18px] w-[18px] text-center text-[12px]  font-medium text-white rounded-full bg-primary absolute -top-1 -right-2">0</div>
                                </div>
                                {/* Profile */}
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center w-full bg-base-100 px-3 py-1 mb-3 rounded-md md:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <input type="text" placeholder="Search for Products, Brands and More" className="input border-none bg-base-100 h-8 font-light text-[12px] px-2 focus:outline-none w-full" />
                        </div>
                    </div>

                    {/* Search bar large screen */}
                    <div className="md:flex items-center w-full bg-base-100 px-3 rounded-md hidden mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input type="text" placeholder="Search for Products, Brands and More" className="input w-full border-none bg-base-100 h-10 text-sm px-2 focus:outline-none" />
                    </div>
                    <div className="hidden flex-none md:block">
                        <ul className=" font-medium flex items-center gap-7 px-4">
                            {/* Navbar menu content here */}
                            <li className="cursor-pointer"><a>Home</a></li>
                            <li className="cursor-pointer"><a>About</a></li>
                            <li className="flex items-center gap-1 cursor-pointer">
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
                                    <div className="h-[18px] w-[18px] text-center text-[12px]  font-medium text-white rounded-full bg-primary absolute -top-1 -right-1">0</div>
                                </div>
                                <a>Cart</a></li>
                            <li className="flex items-center gap-1 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                                <a>Profile</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-4/5 p-4">
                    {/* Sidebar content here */}
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>New Collection</a></li>
                    <li><a>New Arrivals</a></li>
                    <li><a>Sale</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
            </div>
        </nav>
    )
}