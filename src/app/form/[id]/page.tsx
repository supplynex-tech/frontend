import FormPage from "@/components/pages/Form";


export default function Page({params}: {params: any} ) {
    return <FormPage id={params.id}/>;
}
