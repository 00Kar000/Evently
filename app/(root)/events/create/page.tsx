import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";
import React from "react";

const CreateEvent = () => {
    const {sessionClaims} = auth();

    const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="weapper h3-bold text-center max-sm:text-left px-2">
          Create Event
        </h3>
      </section>
      <div className="wrapper min-h-screen">
       <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
