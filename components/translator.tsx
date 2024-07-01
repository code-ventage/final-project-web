import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ArrowUpDown, ArrowLeftRight } from 'lucide-react';
import { Button } from '@/components/ui/button'
import { ChangeEvent } from 'react';

interface Props {
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    value: string | number;
    translation: string | undefined;
    type: "letter" | "number";
    onChangeType: () => void;
    isLoading: boolean;
}

export default function Translator({ onChangeType, onChange, value, translation, type, isLoading }: Props) {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4">
            <div className="flex flex-col gap-y-1 flex-1 max-w-[600px]">
                <Label className="mb-1 font-semibold" htmlFor="to-translate">
                    Ingrese un {type === "number" ? "numeral" : "número"}
                </Label>
                <Textarea
                    id="to-translate"
                    className="w-full resize-none dark:bg-[#09090b] dark:text-white"
                    rows={8}
                    value={value}
                    onChange={onChange}
                    placeholder={type === "letter" ? "e.g 1234" : "e.g mil doscientos treinta y cuatro"}
                />
            </div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            className='w-[50px] rounded-full self-center'
                            onClick={onChangeType}
                        >
                            <ArrowUpDown className="md:hidden size-6" />
                            <ArrowLeftRight className="hidden md:block size-6" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <span>Cambiar a {type === "number" ? "número" : "numeral"}</span>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <div className="flex-1 max-w-[600px]">
                <Textarea
                    readOnly
                    className="w-full resize-none dark:bg-[#09090b] dark:text-white"
                    rows={8}
                    value={translation}
                    placeholder={isLoading ? "Traduciendo..." : "Traducción"}
                />
            </div>
        </div>
    );
}
