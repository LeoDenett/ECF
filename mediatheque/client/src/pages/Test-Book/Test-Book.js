import React, { useState } from 'react';
import SearchArea from './SearchArea'

export default function TestBook () {

    const [books, setBooks] = useState([]);
    const [searchField, setSearchField] = useState('');

    const HandleSearch = (e) => {
        setSearchField({searchField: e.target.value})
    }
    console.log(HandleSearch);
    return (
        <div>
            <SearchArea HandleSearch={HandleSearch} />
        </div>
    )
}