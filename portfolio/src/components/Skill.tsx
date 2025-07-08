
export default function Skill({name, children}: {name: string, children: string}) {
    return <li>
        <span className='text-amber-700 font-bold'>{name}</span> - {children}
    </li>
}
