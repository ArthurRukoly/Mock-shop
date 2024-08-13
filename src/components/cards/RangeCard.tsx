import { Range } from "@/types/Range";

export default function RangeCard({ range }: { range: Range }) {
  return (
    <div className="px-4">
      <img src={range.image.src} alt="" />
      <h2 className="pt-4">{range.title}</h2>
    </div>
  );
}
