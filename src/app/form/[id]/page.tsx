'use client'

import FormDetailPage from "@/components/pages/FormDetail";
import { useParams } from "next/navigation";


export default function Page() {
    const params = useParams();
    if (params.id && typeof params.id === "string") {
        return <FormDetailPage id={params.id}/>
    }
    return <>is loading</>
}
