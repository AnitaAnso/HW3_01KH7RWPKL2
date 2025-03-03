import React from 'react'
import hulk1 from "./img/hulk-1.jpg"
import venom1 from "./img/venom-1.jpg"
import venom2 from "./img/venom-2.jpg"

function Header() {
    return (
        <div>
            <header class="header">
      <div class="container">
        <h1 class="title">Mavel's Fearless</h1>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <div class="search-bar">
          <input type="search" placeholder="Search" />
        </div>

    
        <div class="sample-wallpaper">
          <article class="wallpaper">
            <img src={venom1} alt="Wallpaper #1" class="wallpaper" />
          </article>

    
          <article class="wallpaper">
            <img src={hulk1} alt="Wallpaper #1" class="wallpaper" />
          </article>

          <article class="wallpaper">
            <img src={venom2}alt="Wallpaper #1" class="wallpaper" />
          </article>
        </div>
      </div>
    </header>
        </div>
    )
}

export default Header
