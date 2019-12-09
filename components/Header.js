import Link from 'next/link';

const linkStyle = {
  padding: '16px',
  color: 'honeydew',
  textDecoration: 'none',
  position: 'relative'
};

const Header = () => (
  <div id="bar">
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <style jsx>{`
      #bar {
        width: 100vw;
        background-color: indigo;
        color: honeydew;
        height: 100px;
      }
    `}</style>
  </div>
);

export default Header;
