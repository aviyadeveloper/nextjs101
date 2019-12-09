import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';

const ItemPage = props => {
  return (
    <Layout>
      <h1>{props.episode.name}</h1>
      <p>{props.episode.summary.replace(/<\/?p>/g, '')}</p>
    </Layout>
  );
};

ItemPage.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://api.tvmaze.com/episodes/${id}`);
  const episode = await res.json();

  console.log(`Fetched episode: ${episode.name}`);

  return { episode };
};
export default ItemPage;
