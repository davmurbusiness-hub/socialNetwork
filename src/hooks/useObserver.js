import {useEffect, useRef} from "react";

export const useObserver = (ref, canLoad, isPostsLoading, cal) => {
  const observer = useRef();

  useEffect(() => {
    if(isPostsLoading) return;
    if(observer.current) observer.current.disconnect();

    var callback = function (entries, observer){
      if (entries[0].isIntersecting && canLoad) {
        cal();
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(ref.current)
  }, [isPostsLoading]);
}