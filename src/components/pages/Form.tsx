import { TinyButton } from "../base/button";
import DashboardWrapper from "../dashboard/wrapper";
import DateInput from "../form/dateInput";
import EmailInput from "../form/email";
import FormView from "../form/formView";
import Count from "../form/number";
import Radio from "../form/radio";
import Select from "../form/select";
import TextArea from "../form/textArea";
import FileUpload from "../form/upload";

export default function FormPage() {
    return (
        <DashboardWrapper>
            <h2 className="text-2xl font-bold pb-5 md:pb-0">فرم اول</h2>
            <FormView />
        </DashboardWrapper>
    )
}