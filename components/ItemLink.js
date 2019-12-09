import Link from 'next/link';

const ItemLink = props => (
  <li>
    <Link href={`/item/[id]`} as={`item/${props.id}`}>
      <a>{props.name}</a>
    </Link>
  </li>
);

export default ItemLink;
