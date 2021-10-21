import React from 'react';

export default function SearchArea (props) {
    return (
        <div>
            <form>
                <input onChange={props.HandleSearch} type="text" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}