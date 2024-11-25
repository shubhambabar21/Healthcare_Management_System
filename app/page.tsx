import { PatientForm } from "@/components/forms/PatientForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
     {/*todo:Otp verification/passkey model*/}

      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
      <Image 
       src="/assets/icons/logo-full.svg"
       height={1000}
       width={1000}
       alt="patient"
       className="mb-12 h-10 w-fit" 
      />
      <PatientForm />
      
      <p className="copyright py-12">
      © 2024 CarePluse
      </p>

        </div>
        </section>
        <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
        />
    </div> 
  )
}
