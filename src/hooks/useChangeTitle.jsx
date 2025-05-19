
import { useEffect } from 'react'


export const UseChangeTitle = (title) => {
  useEffect(() => {
    document.title = `Your Moment - ${title}`;
  }, [title]);
}


export default UseChangeTitle
