import patches from "../shared/patches.json"
import Card, { CardSceleton } from "./Card.jsx"
import { For, createSignal, createEffect } from "solid-js"

export default function ProductSection() {
  
  const [products, setProducts] = createSignal(patches)
  const [category, setCategory] = createSignal(0)

  const prodTexts = [
    "Разнообразные варианты креатива",
    "Персонажи культовых аниме",
    "Эмблемы для страйкбольных или спортивных команд",
  ]

  const Categories = ["Все", "Аниме", "Разное"]

  const handleClick = (id) => () => {
    setCategory(id)
  }

  
  const SortPatches = (sortCategory) => {
    if (sortCategory == 0) {
      return patches
    } 

   return patches.filter((p) =>  p.category == sortCategory)
    
  }
  createEffect(() => {
    setProducts(SortPatches(category()))
  }, [category()])
  
  
  const handleExpand = () => {
    
    let section = document.getElementById("sc-products")
    let button = document.getElementById("expand-button")
    let isExpanded = section.classList.contains("ticker--expanded")
   
    if (isExpanded == false) {
      section.classList.add("ticker--expanded")
      button.innerHTML = "Свернуть"
    }

    if (isExpanded == true) {
     
      section.classList.remove("ticker--expanded")
      button.innerHTML = "Показать все"
    }
  }
  return (
    <div className="container">
      <section className="categories">
        <div className="container">
          <div className="cheaps">
            <div class="cheaps">
              {Categories.map((c, idx) => (
                <button
                  class={category() === idx ? "cheap--active" : " "}
                  onClick={handleClick(idx)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <p>{prodTexts[category()]}</p>
        </div>
      </section>

      <section id="sc-products" className="ticker">
        <ul className="wrap">
          <For
            each={products()}
            fallback={<CardSceleton/>}
          >
            {(p, idx) => (
              <li key={p.id}>
                <Card
                  category={p.category}
                  id={idx()}
                  image={p.image}
                  size={p.size}
                  title={p.title}
                  description={p.description}
                  source={p.source}
                />
              </li>
            )}
          </For>
        </ul>
       
      </section>
      <button
          id="expand-button"
          style={{display: products().length > 4 ? 'block' : 'none'}}
          className="ticker-expand btn btn--text"
          onClick={handleExpand}
        >
          Показать все
        </button>
    </div>
  )
}
