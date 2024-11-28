/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { AppointmentForm } from "@/components/forms/AppointmenttForm";
import { getPatient } from "@/lib/actions/patient.actions";

export default async function NewAppointment({params : {userId}}:SearchParamProps) {
    const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
    
     <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

           <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />

        
            <p className="copyright mt-10 py-12">
              © 2024 CarePluse
            </p>

        </div>
      </section>
        <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
        />
    </div> 
  )
}
