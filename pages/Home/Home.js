import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hey, I'm</p>
    <h1>Manuel Caro</h1>
    <p>I'm a full-stack developer based in Almería, Spain, open to remote work. I've recently completed a Higher Diploma in Multiplatform App Development (DAM) and a Full-Stack Web Development Master's, and finished a placement at Trainingym, where I worked on a production Angular + TypeScript application and connected it to the team's .NET REST APIs.
I love building things for the web and mobile — from frontend interfaces with Angular to mobile apps with Flutter. Coming from 20+ years in the energy sector, I bring a builder's mindset, a habit of learning fast and a focus on shipping reliable work. The projects below are work from my Full-Stack Master's, along with Ghost Tennis — my DAM final project — a social tennis app built with Flutter and Supabase.</p>
    <a href="mailto:manuelcaro.dev@gmail.com">Say hi →</a>
    </section>`;
};
