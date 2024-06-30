import { useTheme } from "next-themes";

export default function Background() {
    const { theme } = useTheme();
    return (
        <div>
            {
                theme === 'dark'
                    ? <div
                        className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
                    ></div>
                    : <div
                        className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                    ></div>
            }
        </div>
    );
};
