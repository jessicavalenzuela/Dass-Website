import React from 'react'

import Header from "../components/header/header";
import Blocks from "../components/blocks/blocks";


export default function home() {
    return (
    <main className="mainBody">
        <div>
          <Header />
        </div>
        <div className="blocks">
          <Blocks />
        </div>
    </main>
    )
}
