const ContentLayoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const ContentLayout = props => (
  <div style={ContentLayoutStyle}>{props.children}</div>
);

export default ContentLayout;
