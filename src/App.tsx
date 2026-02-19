import { FC, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import DetailLayout from "./Layout/DetailPage";
import { lazy } from "react";
import {
  FlashCard,
  HomePage,
  Lesson,
  Lessons,
  ListeningPage,
  MultipleChoicePage,
  Profile,
  ReadingPage,
  VocabularyPage,
  WordList,
} from "./Page";

// const HomePage = lazy(()=> import("./Page/HomePage"));

const App: FC = () => {
  const routes = [
    {
      layout: HomeLayout,
      routes: [
        {
          path: "/",
          component: HomePage,
          name: "Home",
        },
        {
          path: "/lessons",
          component: Lessons,
          name: "Lessons",
        },
        {
          path: "/lessons/unit/:id", 
          component: Lesson,
          name: "Lesson",
        },
        
      ],
    },
    {
      layout: DetailLayout,
      routes: [
        {
          path: "/vocabulary-page/:id",
          component: VocabularyPage,
          name: "VocabularyPage",
        },
        {
          path: "/reading-page/:id",
          component: ReadingPage,
        },
        {
          path: "/listening-page/:id",
          component: ListeningPage,
        },
        {
          path: "/multiple-choice-page/:id",
          component: MultipleChoicePage,
        },
      ],
    },
  ];

  return (
    <Router>
      {
        routes.map((route, index) => {
          return <Routes key={index}>
            {
              route.routes.map((item, index) => {
                return <Route key={index} path={item.path} element={<route.layout>
                  <item.component />
                </route.layout>} />
              })
            }
            </Routes>
          
        })
      }
    </Router>
  );
};

export default App;

// <HomeLayout>
// <Routes>
//   <Route path="/lessons/unit/:id" element={<Lesson />} />
//   <Route path="/lessons" element={<Lessons />} />
//   <Route path="/flash-cards" element={<FlashCard />} />
//   <Route path="/word-list" element={<WordList />} />
//   <Route path="/profile" element={<Profile />} />
//   <Route path="/" element={<HomePage />} />
// </Routes>
// </HomeLayout>
// <DetailLayout>
// <Routes>
//   <Route path="/vocabulary-page/:id" element={<VocabularyPage />} />
//   <Route path="/reading-page/:id" element={<ReadingPage />} />
//   <Route path="/listening-page/:id" element={<ListeningPage />} />
//   <Route
//     path="/multiple-choice-page/:id"
//     element={<MultipleChoicePage />}
//   />
// </Routes>
// </DetailLayout>
