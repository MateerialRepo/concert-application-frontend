import React from 'react'

const MainHeader = () => {
  return (
    <header>
        <div>
            <Link href='/'>Concertor</Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link href='/concerts'>Browse all Concerts</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainHeader