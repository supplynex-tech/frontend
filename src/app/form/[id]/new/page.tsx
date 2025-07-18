'use client'

import FormPage from "@/components/pages/Form";
import { useParams } from "next/navigation";


export default function Page() {
    const params = useParams();
    if (params.id && typeof params.id === "string") {
        return <FormPage id={params.id}/>
    }
    return <>is loading</>
}
