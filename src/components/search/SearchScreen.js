import React, { useState } from 'react';
import SearchEntry from './searchEntry';
const SearchScreen = () => {
    const [comic, toggleComic] = useState(true);
    const [story, toggleStory] = useState(true);
    const [forumPost, toggleForumPost] = useState(true);
    const [searchQuery, setSearch] = useState('Spy');
    const [searchResults, setResults] = useState([])
    const [filterOptions, setFilter] = useState(new Set(["C", "S", "F"]))
    // var filterOptions = new Set('C', 'S', 'F')
    const data = [
        {
            title: "Spy x Family",
            author: "Tatsuya Endo",
            cover_image: "https://preview.redd.it/6vkdhawt6j561.jpg?width=640&crop=smart&auto=webp&s=e4546a3daf7204b3e6beb7954f1aaab73f6e9349",
            publication_date: new Date(2022, 5, 9),
            content_type: "C",
            synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Spy Lock",
            author: "Muneyuki Kaneshiro, Yusuke Nomura",
            cover_image: "https://preview.redd.it/k136ah8qf4w61.png?width=600&format=png&auto=webp&s=8fe3b02e7e2abd15b29043d5f601a3d1d400c9ec",
            publication_date: new Date(2021, 3, 16),
            content_type: "S",
            synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Kengan Spy Characters Are Roided",
            author: "BeepBoop Troll",
            cover_image: "https://i2.wp.com/comikey.com/media/comics/WeRbe0/b7210b9cfc0a.jpg?fit=1000%2C1000&quality=95&strip=all",
            publication_date: new Date(2022, 5, 20),
            content_type: "F",
            synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Pokemon Spy",
            author: "Hidemori Kusaha",
            cover_image: "https://images-na.ssl-images-amazon.com/images/I/51IsVZ9QnkL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
            publication_date: new Date(2022, 5, 20),
            content_type: "C",
            synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Spy x Boxer",
            author: "Boxingman",
            cover_image: "https://cover.nep.li/cover/The-Boxer.jpg",
            publication_date: new Date(2022, 5, 9),
            content_type: "C",
            synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Solo Spy",
            author: "Korean WebSpy",
            cover_image: "https://uploads.mangadex.org/covers/32d76d19-8a05-4db0-9fc2-e0b0648fe9d0/4d709522-25f5-4ac0-9b6c-3798a223c7ae.jpg",
            publication_date: new Date(2021, 3, 16),
            content_type: "S",
            synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "The God of Spy",
            author: "MonkeyKing",
            cover_image: "https://cover.nep.li/cover/The-God-Of-High-School.jpg",
            publication_date: new Date(2022, 5, 9),
            content_type: "C",
            synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Spy Stories are too prevalent",
            author: "Spy Hero Guy",
            cover_image: "https://cover.nep.li/cover/Weak-Hero.jpg",
            publication_date: new Date(2021, 3, 16),
            content_type: "F",
            synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Return of the Spy",
            author: "Snakeboy",
            cover_image: "https://cover.nep.li/cover/Return-of-the-Disaster-Class-Hero.jpg",
            publication_date: new Date(2022, 5, 9),
            content_type: "C",
            synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Kill the spy",
            author: "Jin",
            cover_image: "https://cover.nep.li/cover/Kill-The-Hero.jpg",
            publication_date: new Date(2021, 3, 16),
            content_type: "S",
            synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "The Legend of the Spy",
            author: "SnowFlower",
            cover_image: "https://cover.nep.li/cover/Legend-of-the-Northern-Blade.jpg",
            publication_date: new Date(2022, 5, 9),
            content_type: "C",
            synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Spy Group",
            author: "Navar",
            cover_image: "https://cover.nep.li/cover/Study-Group.jpg",
            publication_date: new Date(2021, 3, 16),
            content_type: "S",
            synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        
    ]
    // filtered = []
    const handleComic = (e) => {
        if(comic) {
            filterOptions.delete('C')
        } 
        else {
            filterOptions.add('C')
        }
        toggleComic(!comic)
        setFilter(filterOptions)

    }
    const handleStory = () => {
        if(story) {
            filterOptions.delete('S')
        } 
        else {
            filterOptions.add('S')
        }
        
        toggleStory(!story)
        setFilter(filterOptions)
    }
    const handleForum = () => {
        if(forumPost) {
            filterOptions.delete('F')
        } 
        else {
            filterOptions.add('F')
        }
        toggleForumPost(!forumPost)
        setFilter(filterOptions)
    }
    return (
        <div>
            <div className="grid sm:grid-cols-2">
                <div className="text-lg">
                    Search Results for <strong>{searchQuery}</strong>
                </div>
                <div>
                    <button className={`${comic==true ? "bg-comic" : "bg-transparent"} text-white font-bold border border-comic hover:opacity-70 py-4 px-4 mr-4 rounded`} onClick={handleComic}></button>
                    <button className={`${story==true ? "bg-story" : "bg-transparent"} text-white font-bold border border-story hover:opacity-70 py-4 px-4 mr-4 rounded`} onClick={handleStory}></button>
                    <button className={`${forumPost==true ? "bg-forum" : "bg-transparent"} text-white font-bold border border-forum hover:opacity-70 py-4 px-4 mr-4 rounded`} onClick={handleForum}></button>
                </div>
            </div>
            
            <div className="grid pl-10 lg:grid-cols-3">
                {data.filter(result => { 
                    return filterOptions.has(result.content_type);
                    })
                    .map((result,i) => (
                    <SearchEntry 
                        key={i} 
                        cover={result.cover_image} 
                        title={result.title} 
                        author={result.author} 
                        publicationDate={result.publication_date} 
                        contentType={result.content_type} 
                        synopsis={result.synopsis}
                    />
                ))}
            </div>
        </div>
    );
}

export default SearchScreen;