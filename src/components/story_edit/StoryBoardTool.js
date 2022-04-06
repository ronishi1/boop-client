import React, { useState } from "react";
import BoardCard from "./BoardCard";

const StoryBoardTool = () => {
  const [item, setItem] = useState([]);

  function renderItem(e) {
    // console.log(e);
    //const hold = characters.filter((char) => char.character_name === e);
    setItem([0]);
    //console.log(item);
  }
  const characters = [
    {
      character_name: "Eren Yeager",
      notes: "character notes",
      character_image:
        "https://pbs.twimg.com/media/FCulVSXXEAMe91s.jpg?name=small",
    },
    {
      character_name: "Mikasa Ackerman",
      notes: "character notes",
      character_image:
        "https://cdn.anime-planet.com/characters/primary/mikasa-ackerman-1.jpg?t=1625800241",
    },
    {
      character_name: "Armin Arlet",
      notes: "character notes",
      character_image:
        "https://www.personality-database.com/profile_images/808.png",
    },
    {
      character_name: "Reiner Braun",
      notes: "character notes",
      character_image:
        "https://www.animerankers.com/wp-content/uploads/2021/11/bd8a2f8d1f4cb57054ac4ba8b4d8d7678a2e1980r1-1024-1026v2_uhq-1022x1024.jpg",
    },
    {
      character_name: "Annie Leonhart",
      notes: "character notes",
      character_image:
        "https://cdn.myanimelist.net/images/characters/9/206357.jpg",
    },
    {
      character_name: "Levi Ackerman",
      notes: "character notes",
      character_image:
        "https://cdn.myanimelist.net/images/characters/14/208635.jpg",
    },
    {
      character_name: "Pieck Finger",
      notes: "character notes",
      character_image:
        "https://i.pinimg.com/736x/cf/34/a4/cf34a4a5882c330d364901b9db8b1013.jpg",
    },
  ];
  const plotpoints = [
    {
      plot_point_name: "Army Training",
      notes: "plot point notes",
      plot_point_image:
        "https://d.ecumenicalnews.com/full/22322/630-0/attack-on-titan.png",
    },
    {
      plot_point_name: "War",
      notes: "plot point notes",
      plot_point_image:
        "https://d.newsweek.com/en/full/1702195/attack-titan-final-season-4-visual.jpg",
    },
    {
      plot_point_name: "Resolution",
      notes: "plot point notes",
      plot_point_image:
        "https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/cdn1/press/aot-s4-part2-announcement/aot-fs_hd_eng.jpg",
    },
  ];

  function handleBackButton() {
    setItem([]);
  }
  let content;
  console.log(item);
  if (item.length !== 0)
    content = (
      <div class="drawer-side ">
        <label for="my-drawer-4" class="drawer-overlay"></label>

        <div class="p-4 overflow-y-auto w-1/4 bg-base-100 ">
          <div onClick={handleBackButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </div>
          <div>Eren Yeager</div>
          <img src="https://pbs.twimg.com/media/FCulVSXXEAMe91s.jpg?name=small" />
          <div>
            Birthdate: March 30 Height: 183 cm (6'0") Weight: 63 kg (139 lbs)
            Position: 104th Trainees Squad, Scouting Legion Graduation rank: 5th
            Eren is Shingeki no Kyojin's protagonist. His childhood friend,
            Mikasa, notes on numerous occasions that he acts on impulse without
            thinking things through, and she often pulls/carries/throws him when
            he starts fighting with others to protect him from himself. Along
            with Mikasa, he tends to spend his free time with their mutual
            friend, Armin. His father is a doctor (whom is well respected by
            Hannes and potentially many more) whilst his mother is a housewife.
          </div>
        </div>
      </div>
    );
  else
    content = (
      <div class="drawer-side ">
        <label for="my-drawer-4" class="drawer-overlay"></label>

        <div class="p-4 overflow-y-auto w-1/4 bg-base-100 ">
          <div>Characters </div>
          <div class="grid grid-flow-col ">
            {characters.map((char) => (
              <div class="inline-block px-2 py-2">
                <BoardCard
                  name={char.character_name}
                  image={char.character_image}
                  renderItem={renderItem}
                />
              </div>
            ))}
          </div>
          <div>Plot Points</div>
          <div class="grid grid-flow-col ">
            {plotpoints.map((pp) => (
              <div class="inline-block px-2 py-2">
                <BoardCard
                  name={pp.plot_point_name}
                  image={pp.plot_point_image}
                  renderItem={renderItem}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );

  return content;
};

export default StoryBoardTool;
