import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      address={props.address}
      image={props.image}
      id={props.id}
      title={props.title}
      description={props.description}
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  return {
    props: {
      id: meetupId,
      image:
        "https://s3.amazonaws.com/media.eremedia.com/wp-content/uploads/2017/10/17082809/meetup.jpg",
      title: "First Meetup",
      address: "Right here",
      description: "This is a second meetup description",
    },
    revalidate: 5,
  };
};

export default MeetupDetails;
