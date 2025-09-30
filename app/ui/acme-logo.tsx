import {
  GlobeAltIcon,
  BoltIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <CpuChipIcon className="h-8 w-8" />
      <p className="text-[30px]">Athena</p>
    </div>
  );
}
