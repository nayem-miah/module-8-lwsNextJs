

import Link from "next/link";
export default async function NotificationsPage() {


 

    return (
        <div className="text-xl p-4 row-span-2 border border-gray-200 rounded h-[745px] flex items-center justify-center">
           <span> All NOTIFICATIONS </span>
           <div><Link href="/parallel-dashboard/seen" className="text-blue-400">Seen</Link></div>
        </div>
    );
}
