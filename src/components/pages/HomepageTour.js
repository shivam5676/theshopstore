import { Button } from "react-bootstrap";

const HomepageTour = () => {
  const dummyTour = [
    {
      id: 1,
      address: "Mumbai,IN",
      place: "film city",
      date: "july 19",
    },
    {
      id: 2,
      address: "Delhi,IN",
      place: "A.J Stadium",
      date: "july 9",
    },
    {
      id: 3,
      address: "kanpur,IN",
      place: "Green Park Stadium",
      date: "july 29",
    },
  ];
  const printlist = dummyTour.map((tour) => {
    return (
      <div style={{ display: "flex"}} key={tour.id}>
        <h3 style={{margin:"20px",width:"80px"}}>{tour.date}</h3>
        <h6 style={{margin:"20px",width:"80px"}}>{tour.address}</h6>
        <h6 style={{margin:"20px",width:"80px"}}>{tour.place}</h6>
        <Button style={{margin:"20px",width:"110px"}}>Add Tickets</Button>
        
        
      </div>
    );
  });
  return <div  style={{
    paddingLeft: "20%",
    marginBottom: "5px",
    fontWeight: "bold",
  }}>{printlist}</div>;
};
export default HomepageTour;
