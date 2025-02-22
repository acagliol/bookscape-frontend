import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineManageHistory } from "react-icons/md";

// Define your color palette
const colors = {
  primary: "#9B1C1C", // Main red color used in the sidebar and text
  secondary: "#B85C38", // Darker red used for hover states and buttons
  background: "#FFF8E1", // Light yellow background color
  headerBackground: "#FDFCEB", // Slightly darker yellow for the header
  text: "#9B1C1C", // Text color matching the primary color
  placeholderText: "#9B1C1C", // Placeholder text color
  icon: "#FFFFFF", // White color for icons
  hoverIcon: "#B85C38", // Hover color for icons
  searchBackground: "#FDFCEB", // Background color for the search bar
  searchBorder: "#9B1C1C", // Border color for the search bar
  searchPlaceholder: "#9B1C1C", // Placeholder color for the search bar
  logoutButton: "#9B1C1C", // Color for the logout button
  logoutButtonHover: "#B85C38", // Hover color for the logout button
};

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <section
      className="flex md:bg-[var(--background)] min-h-screen overflow-hidden"
      // Inject the color values as CSS variables on the root element
      style={{
        "--primary": colors.primary,
        "--secondary": colors.secondary,
        "--background": colors.background,
        "--headerBackground": colors.headerBackground,
        "--text": colors.text,
        "--placeholderText": colors.placeholderText,
        "--icon": colors.icon,
        "--hoverIcon": colors.hoverIcon,
        "--searchBackground": colors.searchBackground,
        "--searchBorder": colors.searchBorder,
        "--searchPlaceholder": colors.searchPlaceholder,
        "--logoutButton": colors.logoutButton,
        "--logoutButtonHover": colors.logoutButtonHover,
      }}
    >
      <aside className="sm:flex sm:flex-col">
        <a
          href="/"
          className="inline-flex items-center justify-center h-20 w-20 bg-[var(--primary)] hover:bg-[var(--secondary)] focus:bg-[var(--secondary)]"
        >
       <img
  src="/bookscapeLogo.png"
  alt="Logo"
  className="w-10 max-w-full h-auto object-contain"
/>

        </a>
        <div className="flex-grow flex flex-col justify-between text-[var(--icon)] bg-[var(--primary)]">
          <nav className="flex flex-col mx-4 my-6 space-y-4">
            <a
              href="#"
              className="inline-flex items-center justify-center py-3 hover:text-[var(--text)] hover:bg-[var(--secondary)] focus:text-[var(--text)] focus:bg-[var(--secondary)] rounded-lg"
            >
              <span className="sr-only">Folders</span>
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
            </a>
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center py-3 text-[var(--text)] bg-[var(--background)] rounded-lg"
            >
              <span className="sr-only">Dashboard</span>
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </Link>
            <Link
              to="/dashboard/add-new-book"
              className="inline-flex items-center justify-center py-3 hover:text-[var(--text)] hover:bg-[var(--secondary)] focus:text-[var(--text)] focus:bg-[var(--secondary)] rounded-lg"
            >
              <span className="sr-only">Add Book</span>
              <HiViewGridAdd className="h-6 w-6" />
            </Link>
            <Link
              to="/dashboard/manage-books"
              className="inline-flex items-center justify-center py-3 hover:text-[var(--text)] hover:bg-[var(--secondary)] focus:text-[var(--text)] focus:bg-[var(--secondary)] rounded-lg"
            >
              <span className="sr-only">Documents</span>
              <MdOutlineManageHistory className="h-6 w-6" />
            </Link>
          </nav>
          <div className="inline-flex items-center justify-center h-20 w-20 border-t border-[var(--primary)]">
            <button className="p-3 hover:text-[var(--text)] hover:bg-[var(--secondary)] focus:text-[var(--text)] focus:bg-[var(--secondary)] rounded-lg">
              <span className="sr-only">Settings</span>
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c-.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 012.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </aside>
      <div className="flex-grow text-[var(--text)]">
        <header className="flex items-center h-20 px-6 sm:px-10 bg-[var(--headerBackground)]">
          <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-[var(--text)] hover:bg-[var(--background)] hover:text-[var(--secondary)] focus:bg-[var(--background)] focus:text-[var(--secondary)] rounded-full">
            <span className="sr-only">Menu</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>

          <div className="relative w-full max-w-md sm:-ml-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute h-6 w-6 mt-2.5 ml-2 text-[var(--text)]"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              role="search"
              placeholder="Search..."
              className="py-2 pl-10 pr-4 w-full border-4 border-[var(--searchBorder)] placeholder-[var(--searchPlaceholder)] bg-[var(--searchBackground)] focus:bg-[var(--searchBackground)] rounded-lg"
            />
          </div>

          {/* User Menu & Actions */}
          <div className="flex flex-shrink-0 items-center ml-auto space-x-3">
            <button className="inline-flex items-center p-2 hover:bg-[var(--background)] focus:bg-[var(--background)] rounded-lg">
              <span className="sr-only">User Menu</span>
              <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                <span className="font-semibold text-[var(--text)]">
                  Grace Simmons
                </span>
                <span className="text-sm text-[var(--text)]">Lecturer</span>
              </div>
              <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-[var(--background)] rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="User Profile"
                  className="h-full w-full object-cover"
                />
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="hidden sm:block h-6 w-6 text-[var(--text)]"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="border-l pl-3 ml-3 space-x-1">
              <button className="relative p-2 text-[var(--text)] hover:bg-[var(--background)] hover:text-[var(--secondary)] focus:bg-[var(--background)] focus:text-[var(--secondary)] rounded-full">
                <span className="sr-only">Notifications</span>
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <button
                onClick={handleLogout}
                className="relative p-2 text-[var(--text)] hover:bg-[var(--background)] hover:text-[var(--logoutButtonHover)] focus:bg-[var(--background)] focus:text-[var(--logoutButtonHover)] rounded-full"
              >
                <span className="sr-only">Log out</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        <main className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mr-6">
              <h1 className="text-4xl font-semibold mb-2 text-[var(--text)]">
                Dashboard
              </h1>
              <h2 className="ml-0.5 text-[var(--text)]">
                Book Store Inventory
              </h2>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-end -mb-3">
              <Link
                to="/dashboard/manage-books"
                className="inline-flex px-5 py-3 text-[var(--text)] hover:text-[var(--secondary)] focus:text-[var(--secondary)] hover:bg-[var(--background)] focus:bg-[var(--background)] border border-[var(--primary)] rounded-md mb-3"
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                Manage Books
              </Link>
              <Link
                to="/dashboard/add-new-book"
                className="inline-flex px-5 py-3 text-white bg-[var(--primary)] hover:bg-[var(--secondary)] focus:bg-[var(--secondary)] rounded-md ml-6 mb-3"
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add New Book
              </Link>
            </div>
          </div>
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default DashboardLayout;
