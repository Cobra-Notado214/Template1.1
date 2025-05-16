"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, User, Search, MapPin } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { APP_NAME } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Search", path: "/search" },
    { name: "Destinations", path: "/destinations" },
    { name: "Points", path: "/points" },
  ];

  const isHomePage = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        {
          "bg-transparent": !isScrolled && isHomePage,
          "bg-white shadow-md": isScrolled || !isHomePage,
        }
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className={cn(
            "font-heading text-2xl font-bold transition-colors duration-300",
            {
              "text-white": !isScrolled && isHomePage,
              "text-primary": isScrolled || !isHomePage,
            }
          )}>
            {APP_NAME}
          </span>
          <Badge 
            variant="outline" 
            className={cn(
              "text-xs font-medium transition-colors duration-300",
              {
                "text-white border-white": !isScrolled && isHomePage,
                "text-primary border-primary": isScrolled || !isHomePage,
              }
            )}
          >
            BETA
          </Badge>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 hover:bg-secondary/10",
                {
                  "text-white": !isScrolled && isHomePage,
                  "text-secondary": isScrolled || !isHomePage,
                  "bg-secondary/5": pathname === item.path,
                }
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button 
            className={cn("transition-colors duration-300", {
              "bg-white text-primary hover:bg-white/90": !isScrolled && isHomePage,
              "bg-primary text-white hover:bg-primary/90": isScrolled || !isHomePage,
            })}
            asChild
          >
            <Link href="/login">
              Log in
            </Link>
          </Button>

          <Button 
            className={cn("transition-colors duration-300", {
              "bg-white text-primary hover:bg-white/90": !isScrolled && isHomePage,
              "bg-primary text-white hover:bg-primary/90": isScrolled || !isHomePage,
            })}
            asChild
          >
            <Link href="/signup">
              Sign up
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn("md:hidden", {
                "text-white": !isScrolled && isHomePage,
                "text-secondary": isScrolled || !isHomePage,
              })}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-6 mt-6">
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-heading text-2xl font-bold text-primary">
                  {APP_NAME}
                </span>
                <Badge variant="outline" className="text-xs font-medium text-primary border-primary">
                  BETA
                </Badge>
              </Link>

              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <Link 
                    key={item.path} 
                    href={item.path}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 hover:bg-secondary/10",
                      {
                        "text-secondary": true,
                        "bg-secondary/5": pathname === item.path,
                      }
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col space-y-3">
                <Button 
                  className="bg-primary text-white hover:bg-primary/90 w-full"
                  asChild
                >
                  <Link href="/login">
                    Log in
                  </Link>
                </Button>

                <Button 
                  className="bg-primary text-white hover:bg-primary/90 w-full"
                  asChild
                >
                  <Link href="/signup">
                    Sign up
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;