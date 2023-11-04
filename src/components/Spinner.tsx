import { Ring } from "@uiball/loaders";

export default function Spinner() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Ring size={40} lineWeight={5} speed={2} color="black" />
    </div>
  );
}
