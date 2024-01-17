import EventForm from "@/components/shared/EventForm";
import { getEventById } from "@/lib/actions/event.actions";
import { auth } from "@clerk/nextjs";

type UpdateEventProps = {
  params:{
    id:string
  }
}

const UpdateEvent = async({params:{id}}:UpdateEventProps) => {
    const {sessionClaims} = auth();
    const userId = sessionClaims?.userId as string;
    const event = await getEventById(id)

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="weapper h3-bold text-center max-sm:text-left px-2">
        Update Event
        </h3>
      </section>
      <div className="wrapper min-h-screen">
       <EventForm userId={userId} type="Update" eventId={event?._id} event={event} />
      </div>
    </>
  );
};

export default UpdateEvent;
