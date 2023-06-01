"use client";

import HorizontalScrollbar from "@/components/horizontal-scrollbar/HorizontalScrollbar";
import React from "react";

const categories = [
   "Gaming",
   "Music",
   "Comedy",
   "Beauty and Fashion",
   "Vlogs",
   "DIY and Crafts",
   "Education",
   "Science and Technology",
   "Cooking and Food",
   "Travel and Adventure",
   "Health and Fitness",
   "Sports",
   "News and Politics",
   "Entertainment",
   "Film and Animation",
   "Art and Design",
   "Business and Finance",
   "Parenting and Family",
   "Personal Development and Motivation",
   "History and Documentary",
   "Lifestyle and Home",
   "Gaming Reviews and Commentary",
   "Fashion and Style Tips",
   "Makeup and Beauty Tutorials",
   "Language Learning",
   "Product Reviews and Unboxing",
   "Book Reviews and Recommendations",
   "Music Covers and Remixes",
   "Travel Guides and Tips",
   "Reaction Videos",
];

const users = new Array(20).fill(0).map((item, index) => {
   return {
      id: index,
      username: `U#${index}`,
      image: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 50)}`,
   };
});

const HorizontalScrollbarPage = () => {
   console.log(users);

   return (
      <div className="bg-white rounded-lg mx-4 p-4">
         <h1>HorizontalScrollbarPage</h1>
         <br />
         <br />
         <h1 className="text-blue-800 text-2xl">YouTube categories</h1>
         <HorizontalScrollbar>
            {categories.map((item, index) => (
               <div
                  key={index}
                  className="border-2 border-gray-200 p-1 shrink-0 rounded-lg hover:border-gray-400 cursor-pointer"
               >
                  <h1>{item}</h1>
               </div>
            ))}
         </HorizontalScrollbar>
         <br />
         <br />
         <h1 className="text-blue-800 text-2xl">Instagram Stories</h1>
         <HorizontalScrollbar>
            {users.map((item) => (
               <div className="shrink-0">
                  <img
                     src={item.image}
                     alt={item.username}
                     className="w-14 h-14 rounded-full cursor-pointer hover:scale-125 transition-all duration-200"
                  />
               </div>
            ))}
         </HorizontalScrollbar>
      </div>
   );
};

export default HorizontalScrollbarPage;
