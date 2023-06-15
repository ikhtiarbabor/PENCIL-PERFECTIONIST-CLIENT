import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `PP || ${title}`;
  }, [title]);
};

export default useTitle;
