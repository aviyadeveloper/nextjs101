import ItemLink from '../components/ItemLink';

const ItemsList = props => {
  return (
    <div>
      <h1>Items in website</h1>
      <ul>
        {props.list.map(item => (
          <ItemLink key={item.id} id={item.id} name={item.name} />
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
