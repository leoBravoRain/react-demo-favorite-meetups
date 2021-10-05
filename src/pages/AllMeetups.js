import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3001/meetups")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setMeetups(data);
      });
  }, []);

  return (
    <section>
      <h1>All meetups page</h1>
      {!isLoading ? <MeetupList meetups={meetups} /> : <div>Loading ... </div>}
    </section>
  );
}

export default AllMeetupsPage;
