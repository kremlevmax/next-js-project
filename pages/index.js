import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    image:
      "https://s3.amazonaws.com/media.eremedia.com/wp-content/uploads/2017/10/17082809/meetup.jpg",
    title: "First Meetup",
    address: "Right here",
  },
  {
    id: "m2",
    image:
      "https://s3.amazonaws.com/media.eremedia.com/wp-content/uploads/2017/10/17082809/meetup.jpg",
    title: "Second Meetup",
    address: "Right there",
    description: "This is a second meetup description",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_DATA} />;
};

export default HomePage;
