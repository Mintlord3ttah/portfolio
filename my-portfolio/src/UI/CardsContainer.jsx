import React from 'react'

export default function CardsContainer({ children, flexCol = "" }) {
    return <div className={`cards flex gap-7 ${flexCol} px-4 flex-wrap justify-center`}>{children}</div>
}
