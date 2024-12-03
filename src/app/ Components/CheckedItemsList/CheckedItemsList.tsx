import "./CheckedItemsList.css";
import CheckedItem from "./CheckedItem/CheckedItem";
type CheckedItemsListProps = {
  items: string[];
  isAligned: boolean;
};

export default function CheckedItemsList({ items, isAligned = false }: CheckedItemsListProps) {
  return (
    <div className={`list_text ${isAligned ? "aligned" : "column"}`}>
      <ul>
        {items.map((item, index) => (
          <CheckedItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
