import Header from './Header';

const MainLayoutStyle = {
  margin: 0,
  padding: 0,
  position: 'absolute'
};

const MainLayout = props => (
  <div style={MainLayoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default MainLayout;
