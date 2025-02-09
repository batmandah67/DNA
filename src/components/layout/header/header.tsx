"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import ClientHeaderOnly from "@/components/client-header-only";
import Image from "next/image";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdownItems?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Лаборатори", href: "/" },
  { label: "Үйл ажиллагаа", href: "/about" },
  {
    label: "Хүсэлт",
    href: "/services",
    dropdownItems: [
      { label: "Хүсэлт 1", href: "/services/request1" },
      { label: "Хүсэлт 2", href: "/services/request2" },
      { label: "Хүсэлт 3", href: "/services/request3" },
    ],
  },
  { label: "Холбоо барих", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isParentActive = (item: NavItem) => {
    if (pathname === item.href) return true;
    if (item.dropdownItems) {
      return item.dropdownItems.some(
        (dropdownItem) => pathname === dropdownItem.href
      );
    }
    return false;
  };

  const getNavItemClass = (item: NavItem) => {
    const isActive = isParentActive(item);
    return isActive
      ? "text-[#f69d78] hover:text-[#f69d78] px-3 py-2 rounded-md text-md font-medium"
      : "text-white hover:text-[#f69d78] px-3 py-2 rounded-md text-md font-medium";
  };

  const getMobileNavItemClass = (item: NavItem) => {
    const isActive = isParentActive(item);
    return isActive
      ? "block text-[#f69d78] hover:text-[#f69d78] hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
      : "block text-gray-600 hover:text-[#f69d78] hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium";
  };

  const getDropdownItemClass = (href: string) => {
    const isActive = pathname === href;
    return isActive
      ? "block px-4 py-2 text-sm text-[#f69d78] hover:bg-gray-100"
      : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100";
  };

  return (
    <ClientHeaderOnly>
      <div className="fixed top-0 left-0 right-0 bg-[#07332F] shadow-sm font-roboto p-5 border-b-[0.01px] border-opacity-60 border-[#f69d78] px-20 z-50">
        <nav className="container mx-auto">
          <div className="flex items-center justify-evenly h-16">
            <div className="flex-shrink-0 ">
              <a
                href="/"
                className="text-white text-2xl tracking-wide font-bold"
              >
                <Image
                  src="/logo.png"
                  alt="Next.js logo"
                  width={210}
                  height={58}
                  priority
                />
              </a>
            </div>

            <div className="hidden md:block">
              <div className="flex gap-4">
                {navItems.map((item) => (
                  <div key={item.label} className="relative group ">
                    <div className="flex items-center cursor-pointer">
                      <a href={item.href} className={getNavItemClass(item)}>
                        {item.label}
                      </a>
                      {item.dropdownItems && (
                        <ChevronDown className="-translate-x-3 w-4 text-white transition-transform group-hover:rotate-180" />
                      )}
                    </div>

                    {item.dropdownItems && (
                      <div className="invisible group-hover:visible absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-all duration-200">
                        <div className="py-1">
                          {item.dropdownItems.map((dropdownItem) => (
                            <a
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className={getDropdownItemClass(
                                dropdownItem.href
                              )}
                            >
                              {dropdownItem.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-[#f69d78]"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white mt-2">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between">
                      <a
                        href={item.href}
                        className={getMobileNavItemClass(item)}
                        onClick={() => !item.dropdownItems && setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                      {item.dropdownItems && (
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.label ? null : item.label
                            )
                          }
                          className="p-2 text-gray-600 hover:text-[#f69d78]"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              activeDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    {item.dropdownItems && activeDropdown === item.label && (
                      <div className="pl-4 space-y-1 bg-gray-50">
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className={getDropdownItemClass(dropdownItem.href)}
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </ClientHeaderOnly>
  );
};

export default Header;
