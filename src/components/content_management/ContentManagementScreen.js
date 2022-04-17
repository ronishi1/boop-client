import React, { useState } 	from 'react';
import ChapterEntry from './ChapterEntry'
import GenreSelector from './GenreSelector';
import {Link} from 'react-router-dom'

const ContentManagementScreen = () => {
  const content = {
    title:"Attack on Titan",
    cover_image: "https://static.wikia.nocookie.net/shingekinokyojin/images/d/db/Volume_1_Cover.png",
    synopsis: `
    Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter.
    `,
    content_type:"C",
    chapters:[
      {
        title:"To You 2000 years in the Future",
        publication_date: new Date(2018, 11, 24),
      },
      {
        title:"Betrayal",
        publication_date: new Date(2019, 11, 24),
      },
      {
        title:"Avenger",
        publication_date: new Date(2020, 11, 24),
      },
      {
        title:"To You 2000 years ago",
        publication_date: null,
      },
      {
        title:"Infight",
        publication_date: null,
      },
      {
        title:"Misery",
        publication_date: null,
      },
      {
        title:"Rumble",
        publication_date: null,
      },
    ],
    genres: ["Action","Adventure"],
  }

  const genres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mecha", "Music", "Mystery", "Psychological", "Romance", "SciFi", "Slice of Life", "Sports", "Supernatural", "Thriller"]

  const [activeTab, setActiveTab] = useState(1);
  const [input,setInput] = useState({
    title: content.title,
    synopsis: content.synopsis,
  });

  const [editing,toggleEdit] = useState({
    title: false,
    synopsis: false,
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  return (
    <div>
      <div className='grid grid-cols-2 w-full'>
        <div className='col-span-1 flex flex-col w-full my-8 space-y-2 flex place-content-center'>
          <div className='flex justify-end space-x-2 w-5/6'>
              <button className="btn btn-ghost">Undo Changes</button>
              <button className="btn">Save</button>
            </div> 
          <div className='flex place-content-center'>
            <div className='w-3/4'>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Title</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Title your series" 
                  className="input input-bordered"
                  name="title"
                  value={input.title}
                  onChange={handleChange}
                />
              </div>
              <label class="label">
                <span class="label-text">Synopsis</span>
              </label>
              <textarea 
                class="textarea w-full border-2 border-gray-500/30 focus:ring-0 focus:outline-none h-64" 
                placeholder="Give your series a synopsis"
                value = {input.synopsis}
                onChange={(event) => { setInput({synopsis: event.target.value});}}
              />
              <div>
                <label class="label">
                  <span class="label-text">Genres</span>
                </label>
                <div className='flex flex-row flex-wrap'>
                  {genres.map((genre) => {
                    let initialState = content.genres.includes(genre)
                    return <GenreSelector genre={genre} initialState={initialState} contentType={content.content_type}/>
                  })}
                </div>
              </div>
              <div>
                <label class="label">
                  <span class="label-text">Cover Image</span>
                </label>
                <img 
                  className='w-full max-w-lg hover:cursor-pointer hover:opacity-80' 
                  src={content.cover_image}
                />
              </div>
            </div> 
          </div>
        </div>
        <div className='col-span-1 m-8'>
          <div className="card static rounded-none h-full overflow-y-auto">
            {content.chapters.map(chapter => (
              <ChapterEntry chapter={chapter}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentManagementScreen;
