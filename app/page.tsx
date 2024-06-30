"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Translator from "@/components/translator";
import Background from "@/components/background";
import { Button } from "@/components/ui/button";
import { GamepadIcon } from "lucide-react";
import { translateToNumeral, translateToNumber } from "@/services/translate";

export default function Home() {
    const [value, setValue] = useState("");
    const [translation, setTranslation] = useState<string | undefined>("");
    const [consultType, setConsultType] = useState<"letter" | "number">("letter");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = async (value: string) => {
        setIsLoading(true);
        // numero a numeral
        if (consultType === "letter") {
            const translated = await translateToNumeral(value);
            setTranslation(translated);
            setValue(value);
        }
        // numeral a numero
        else {
            const translated = await translateToNumber(value);
            setTranslation(translated);
            setValue(value);
        }
        setIsLoading(false);
    }

    const handleChangeType = () => {
        if (consultType === "letter") {
            setConsultType("number");
        } else {
            setConsultType("letter");
        }
        setValue("");
        setTranslation("");
    }

    return (
        <div className="relative min-h-screen gap-y-6">
            <Navbar />
             <Background />
            <main className="flex flex-col gap-y-4 px-4 my-10">
                <Translator
                    isLoading={isLoading}
                    type={consultType}
                    onChangeType={handleChangeType}
                    value={value}
                    translation={translation ?? ""}
                    onChange={e => handleChange(e.target.value)}
                />
            </main>
            <Button
                className="md:hidden block absolute bottom-10 right-3"
            >
                <GamepadIcon className="size-6" />
            </Button>

            <Footer />
        </div>
    );
}
