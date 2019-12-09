import MainLayout from '../components/MainLayout';
import ContentLayout from '../components/ContentLayout';
import ItemsList from '../components/ItemsList';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <MainLayout>
    <ContentLayout>
      <content>
        <h4>This is an introduction to the website</h4>
        <ItemsList list={props.list} />
      </content>
    </ContentLayout>
    <style jsx>{`
      h4 {
        color: indigo;
      }
    `}</style>
  </MainLayout>
);

Index.getInitialProps = async function() {
  const res = await fetch('http://api.tvmaze.com/shows/530/episodes');
  const data = await res.json();

  console.log(`Show data fetched. Episodes count: ${data.length}`);
  const list = data.map(item => {
    return { name: item.name, id: item.id };
  });

  return {
    list
  };
};

export default Index;
