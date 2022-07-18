import React from "react";

interface LinkProps {
  className:string;
  href: string;
  children: JSX.Element[] | JSX.Element;
}

const Link:React.FC<LinkProps> = ({ className, href, children }) => {
  const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // if ctrl or meta key are held on click, allow default behavior of opening link in new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    // prevent full page reload
    event.preventDefault();
    // update url
    window.history.pushState({}, "", href);

    // communicate to Routes that URL has changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };
  return (
    <a className={className} onClick={(e) => onClick(e)} href={href}>
      {children}
    </a>
  );
};

export default Link;