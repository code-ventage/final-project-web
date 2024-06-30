import { Textarea } from '@/components/ui/textarea'
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
            <Textarea
                className="flex-1 max-w-[600px]"
                rows={8}
                value={value}
                onChange={onChange}
                placeholder={type === "number" ? "Escribe un numeral" : "Escribe un numero"}
            />
            <Button
                className='w-[50px] rounded-full self-center'
                onClick={onChangeType}
            >
                <ArrowUpDown className="md:hidden size-6" />
                <ArrowLeftRight className="hidden md:block size-6" />
            </Button>
            <Textarea
                readOnly
                className="flex-1 max-w-[600px]"
                rows={8}
                value={translation}
                placeholder={isLoading ? "Traduciendo..." : "Traducción"}
            />
        </div>
    );
}
