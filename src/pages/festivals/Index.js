

import { useEffect, useState } from 'react';
import axios from 'axios';

const Index = () => {

    const [festivals, setFestivals] = useState(null);
    useEffect(() => {
        axios.get('https://festivals-api.vercel.app/api/festivals')
        .then((response) => {
            console.log(response.data)
            setFestivals(response.data)
        })
        .catch((err) => {
            console.log(err);
        });
        }
    , [] );

    return (<h2>
        Festivals index</h2>
    )
}

export default Index;