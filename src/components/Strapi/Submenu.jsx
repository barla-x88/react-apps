import { useRef } from "react";
import { useGlobalContext } from "../../context";
import sublinks from "./data";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const submenuContainer = useRef(null);
  // handle mouse leave

  const handleMouseLeave = (e) => {
    const submenuPosition = submenuContainer.current.getBoundingClientRect();
    if (
      e.clientX < submenuPosition.left ||
      e.clientX > submenuPosition.right ||
      e.clientY > submenuPosition.bottom
    ) {
      setPageId(null);
    }
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={currentPage ? "submenu show-submenu" : "submenu"}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => (
          <a key={link.id} href={link.url}>
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
export default Submenu;

{
  /* <ul>
          {currentPage.links.map((link) => (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.label}
              </a>
            </li>
          ))}
        </ul> */
}
