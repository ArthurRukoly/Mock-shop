import RANGE_LIST from "../../models/Ranges";
import RangeCard from "../cards/RangeCard";

export default function RangeBrowser() {
  return (
    <div className="flex flex-col text-center py-16">
      <h1>Brose The Range</h1>
      <p>Larem ipsum dolor sit amet, consectetur adsciping elit</p>
      <ol className="flex py-4 justify-center">
        {RANGE_LIST.map((range) => (
          <RangeCard key={range.id} range={range} />
        ))}
      </ol>
    </div>
  );
}
