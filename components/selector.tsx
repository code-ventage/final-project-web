import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Props {
    value: string;
    onChange: (value: "letter" | "number") => void;
}

export default function Selector({ value, onChange }: Props) {
    return (
        <RadioGroup
            defaultValue={value}
            onValueChange={onChange}
            className="flex gap-x-2"
        >
            <div className="flex items-center gap-x-2">
                <RadioGroupItem value="letter" />
                <Label>Numeral</Label>
            </div>

            <div className="flex items-center gap-x-2">
                <RadioGroupItem value="number" />
                <Label>Numero</Label>
            </div>
        </RadioGroup>
    );
};
