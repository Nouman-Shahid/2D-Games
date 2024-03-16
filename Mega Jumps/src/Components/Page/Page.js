import React from 'react'
import style from './Page.module.css'

const Page = () => {
  return (
    <section>

        <div className={style.menu}>
          <h1>Mega Jumps</h1>
          <h2>developed by Numan</h2>

          <ul>
            <li><a href="/home" >Play</a></li>
            <li><a href="/shop" >Shop</a></li>
            <li><a href="/about" >About</a></li>
          </ul>
          <img src='' className={style.music} id='music' />
        </div>
      </section>
  )
}

export default Page
