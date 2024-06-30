import Link from "next/link";
import { GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full flex items-center justify-between md:gap-x-4 py-2 px-4 text-sm text-gray-500 border-t border-gray-200 shadow-sm">
            <div>
                <span className="font-medium">Trabajo Final Web 2024 &copy;</span>

            </div>

            <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link
                    href="https://github.com/code-ventage/final-project-web"
                    title="Repositorio de GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GithubIcon className="size-7" />
                </Link>

            </Button>
        </footer>
    );
}
