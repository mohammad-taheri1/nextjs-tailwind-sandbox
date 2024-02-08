import { useEffect } from 'react';

/*
 *  we need to receive some props
 * 1- x : the left position of cursor
 * 2- y : the top position of cursor
 * 3- onCloseContextMenu: to call close function on parent
 * 4- parentRef: we need this to close context menu when click outside of menu
 * 5- children: the menu items that is dynamic
 * */

const ContextMenu = ({ x, y, onCloseContextMenu, parentRef, children }) => {
  const menuStyle = {
    top: `${y}px`,
    left: `${x}px`,
  };

  useEffect(() => {
    //   listener
    const clickListener = (event) => {
      const menuParent = parentRef?.current;
      if (!menuParent || !menuParent.contains(event?.target)) {
        return;
      }
      onCloseContextMenu();
    };

    document.addEventListener('mousedown', clickListener);

    return () => {
      document.removeEventListener('mousedown', clickListener);
    };
  }, []);

  return (
    <div
      className='p-2 absolute z-999 border border-gray-300 bg-gray-100 rounded-lg'
      style={menuStyle}
      //   onClick={onCloseContextMenu}
    >
      {children}
    </div>
  );
};

export default ContextMenu;
