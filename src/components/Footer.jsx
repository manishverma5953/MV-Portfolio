import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-4 px-4 bg-card relative border-t border-border mt-2 pt-4 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy;MV {new Date().getFullYear()}.co. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp className="cursor-pointer" size={20} />
      </a>
    </footer>
  );
};
