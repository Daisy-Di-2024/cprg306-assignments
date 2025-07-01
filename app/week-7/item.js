

export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-blue-100 rounded-lg shadow p-4 mb-2 max-w-sm">
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-sm text-gray-600">Buy {quantity} in {category}</p>
    </li>
  );
}