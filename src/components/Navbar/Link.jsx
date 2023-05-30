const Link = ({ url, text }) => {
  return (
    <li className="link">
      <a href={url}>{text}</a>
    </li>
  );
};
export default Link;
