import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetupPage() {
  const history = useHistory();

  function onAddMeetup(meetupData) {
    // console.log(meetupData);
    fetch("http://localhost:3001/meetups", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>New meetup page</h1>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </section>
  );
}

export default NewMeetupPage;
