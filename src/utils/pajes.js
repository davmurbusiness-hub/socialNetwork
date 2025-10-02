import {useMemo} from "react";

export const getPagesCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const usePagination = (totalPages) => {


    const result = useMemo(() => {

        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        console.log(pages)
        return pages;
    }, [totalPages]);



    return result;
}