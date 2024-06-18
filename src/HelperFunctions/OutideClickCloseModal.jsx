import { useEffect } from 'react';

function OutideClickCloseModal(ref, callback) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

export default OutideClickCloseModal;


// How to implement this Function

// useOutsideClick(profileRef, () => setProfileOpen(false));
// profileRef is the ref of the modal
//setProfileOpen is the call back function
