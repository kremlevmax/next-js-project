const MeetupDetail = (props) => {
  return (
    <>
      <img src={props.image} alt={props.title} />
      <h1>
        {props.title} {props.id}
      </h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </>
  );
};

export default MeetupDetail;
