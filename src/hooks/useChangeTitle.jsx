
import { useEffect } from 'react'


export const UseChangeTitle = (title) => {
  useEffect(() => {
    document.title = `Your Moments - ${title}`;
  }, [title]);
}


export default UseChangeTitle
