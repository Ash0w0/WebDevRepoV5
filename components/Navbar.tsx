"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const services = [
    { name: "Frontend Development", href: "/services/frontend" },
    { name: "Backend Development", href: "/services/backend" },
    { name: "Full Stack Development", href: "/services/fullstack" },
    { name: "Mobile Development", href: "/services/mobile" },
    { name: "Digital Marketing", href: "/services/digital-marketing" }
  ];

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">WebDevSolutions</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md">
                Home
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary px-3 py-2 rounded-md">
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.href} asChild>
                      <Link href={service.href}>{service.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/why-choose-us" className="text-foreground hover:text-primary px-3 py-2 rounded-md">
                Why Choose Us
              </Link>
              
              <Link href="/join" className="text-foreground hover:text-primary px-3 py-2 rounded-md">
                Join As Developer
              </Link>
              
              {mounted && (
                <Button 
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              )}
              
              <Button asChild>
                <a href="mailto:contact@webdevelopmentsolutions.in">Contact Us</a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {mounted && (
              <Button 
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-foreground hover:text-primary">
              Home
            </Link>
            
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block px-3 py-2 rounded-md text-foreground hover:text-primary"
              >
                {service.name}
              </Link>
            ))}
            
            <Link href="/why-choose-us" className="block px-3 py-2 rounded-md text-foreground hover:text-primary">
              Why Choose Us
            </Link>
            
            <Link href="/join" className="block px-3 py-2 rounded-md text-foreground hover:text-primary">
              Join As Developer
            </Link>
            
            <Button asChild className="w-full mt-2">
              <a href="mailto:contact@webdevelopmentsolutions.in">Contact Us</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}