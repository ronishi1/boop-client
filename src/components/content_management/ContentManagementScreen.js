import React 	from 'react';
import ChapterEntry from './ChapterEntry'
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
    ]
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3">
        <div className="col-span-1 border-r-2 border-base-content/10">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <div className="text-2xl font-medium">
                {content.title}
              </div>
              <img src={content.cover_image}/>
            </div>
            <div className="col-span-1 text-xs mt-8">
              {content.synopsis}
            </div>
          </div>

        </div>
        <div className="col-span-2 ml-5">
          <div className="card rounded-none">
            <p className='text-2xl font-medium'>Chapter List</p>
            <div className="card rounded-none h-full overflow-y-auto">
              {content.chapters.map(chapter => (
                <ChapterEntry chapter={chapter}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentManagementScreen;
