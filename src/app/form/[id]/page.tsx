import FormPage from "@/components/pages/Form";

interface PageProps {
    params: { id: string };
};

export default function Page({ params }: PageProps) {

    return (
        <FormPage id={params.id} />
    );
}