import Advantage from "../landing/Advantage"
import CTA from "../landing/CTA"
import Customers from "../landing/Customers"
import Header from "../landing/Header"
import Instruction from "../landing/Instruction"
import Questions from "../landing/Questions"

export default function LandingPage() {
    return (
        <>
            <Header />
            <Instruction />
            <Advantage />
            <Customers />
            <CTA />
            <Questions />
        </>
    )
}