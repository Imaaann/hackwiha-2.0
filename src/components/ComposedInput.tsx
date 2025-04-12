import { Input } from "./ui/input";
import { Label } from "./ui/label";

function ComposedInput({ label, id }: { label: string; id: string }) {
  return (
    <div className="grid grid-cols-4 items-center gap-4 text-2xl">
      <Label htmlFor={id} className="text-right text-2xl">
        {label}
      </Label>
      <Input id={id} className="col-span-3" />
    </div>
  );
}

export default ComposedInput;
