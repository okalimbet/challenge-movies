import React from "react";

interface LinkProps {
  className:string;
  href: string;
  children: JSX.Element[] | JSX.Element;
  ariaLabel: string;
}

const Link:React.FC<LinkProps> = ({ className, href, children, ariaLabel }) => {
  const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // if ctrl or meta key are held on click, allow default behavior of opening link in new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    // prevent full page reload
    event.preventDefault();
    // update url
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };
  return (
    <a className={className} aria-label={ariaLabel} onClick={(e) => onClick(e)} href={href}>
      {children}
    </a>
  );
};

export default Link;