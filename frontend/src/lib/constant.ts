import { Book, FileText, Library, Disc } from "lucide-react";

export const NAV_LINKS = [
  { label: "Community", href: "/community" },
  { label: "Help", href: "/help" }, 
  { label: "Careers", href: "/careers" },
];

export const RESOURCES_MENU = {
  resources: [
    { title: "Documentation", href: "/docs", icon: Book },
    { title: "Blog", href: "/blog", icon: FileText },
    { title: "Library", href: "/gallery", icon: Library },
  ]
};

export const FOOTER_LINKS = [
  {
    title: "Product",
    links: ["Features", "Changelog", "Docs"]
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Contact"]
  },
  {
    title: "Support", 
    links: ["Help Center", "Privacy Policy", "Terms of Service"]
  }
];