import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
     {/*   <span className="headerTitleSm">React & Node</span> */}
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
    </div>
  );
}