import { useEffect, useState } from 'react'
import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/dhrubobarman/cf6a80ed3b9f68a11de07e9ea0f28202/raw/United%2520Nations%2520World%2520Population%2520Prospects%25202019'


export const useData = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const row = (d) => {
            d.Population = +d['2020'] * 1000;
            return d;
        };
        csv(csvUrl, row).then((data) => {
            setData(data.slice(0, 10));
        });
    }, []);
    return data;
}