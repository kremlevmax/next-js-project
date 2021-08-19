import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const onAddMeetupHandler = (data) => {
    console.log(data);
  };
  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
};

export default NewMeetup;
