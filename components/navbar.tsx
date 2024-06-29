import { SettingsIcon } from "lucide-react";

export default function Navbar() {
    return (
        <header className="w-full flex items-center justify-between py-4 px-8 sm:px-12 lg:px-24">
            <span>Number Translator</span>
            <nav>
                                <li>
                    <a href="#">
                        <SettingsIcon className="size-6" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <SettingsIcon className="size-6" />
                    </a>
                </li>

            </nav>
        </header>
    );
}
