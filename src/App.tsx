import { categoriesData } from "./data/categoriesData";
import CategoryCard from "./components/CategoryCard";
import "./App.css"
import sedanIcon from "./assets/icon-sedans.svg";
import suvIcon from "./assets/icon-suvs.svg";
import luxuryIcon from "./assets/icon-luxury.svg";


const iconById: Record<string, string> = {
  sedans: sedanIcon,
  suvs: suvIcon,
  luxury: luxuryIcon,
};

export default function App() {
  return  (
    <main>
      <section className="cards" aria-label="Car categories">
        {categoriesData.map((c) => (
          <CategoryCard
          key={c.id}
          {...c}
          iconSrc={iconById[c.id]}
          />
        ))}
      </section>
    </main>
  );
  
}
