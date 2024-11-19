import {useState} from "react";

export default function SearchableList({items, itemKeyFn, children}){

    const [searchTerm, setSearchTerm] = useState('');

    const searchResult = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()));

    const handleChange = (evnet) => {
        setSearchTerm(event.target.value);
    }

    return <div className={"searchable-list"}>
        <input type={"search"} placeholder={"Search"} onChange={handleChange}/>
        <ul>
            {searchResult.map((item, index) => (
                <li key={itemKeyFn(item)}>
                    {children(item)}
                </li>
            ))}
        </ul>
    </div>
}
