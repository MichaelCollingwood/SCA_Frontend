import Link from 'next/link';
import Emoji from './Emoji';

export default function NavItem({emoji, where}: {emoji: string, where: string}) {
    return (
        <div className="px-1">
            <li className="sm:inline-flex sm:w-auto w-full px-3 py-2 rounded bg-slate-200 hover:bg-white hover:text-black font-bold">
                <Link href={`/${where.toLowerCase()}`}>
                    <div>
                        <Emoji symbol={emoji} label={where}/>
                        <h1 className="inline-flex">{where}</h1>
                    </div>
                </Link>
            </li>
        </div>
    )
}