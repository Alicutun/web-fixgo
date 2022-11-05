import React, { useState, useEffect } from "react";
import "../../sass/components/subcomponents/booking.scss";
// @ts-ignoreaaa
import SeatPicker from "../../react-seat-picker/dist/index";
import axios from "axios";
// ngon lành cành trúc khế lun
const Booking = ({ idMovie, nameMovie }) => {
   function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [ mnth, day,date.getFullYear()].join("/");
  }
  const [payment, setPayment] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [cinema, setCinema] = useState([]);
  const [idcinema, setIdCinema] = useState("");

  const [date, setDate] = useState([]);
  const [iddate, setIdDate] = useState("");

  const [sesscion, setSesscion] = useState([]);
  const [idsesscion, setIdSession] = useState("");

  const [seat, setSeat] = useState([]);

  const [selected, setSelected] = useState([]);

  const addSeatCallback = ({ row, number, id }, addCb) => {
    setSelected((prevItems) => [...prevItems, number]);
    // const newTooltip = `Cancel seat ${number}`;
    addCb(row, number, id);
  };
  console.log(selected);
  const removeSeatCallback = ({ row, number, id }, removeCb) => {
    setSelected((list) => list.filter((item) => item !== number));
    removeCb(row, number);
  };
  const price = 10;
  const totalprice = price * selected.length;
  const rows = [
    [
      { id: 1, number: "A1" },
      { id: 2, number: "A2" },
      { id: 3, number: "A3" },
      { id: 4, number: "A4" },
      { id: 24, number: "A5" },
      { id: 44, number: "A6" },
      { id: 54, number: "A7" },
      { id: 5, number: "A8" },
      { id: 6, number: "A9" },
      { id: 7, number: "A10" },
      { id: 8, number: "A11" },
      { id: 34, number: "A2" },
      { id: 9, number: "A13", isReserved: true },
    ],
    [
      { id: 11, number: "B1" },
      { id: 12, number: "B2" },
      { id: 13, number: "B3", isReserved: true },
      { id: 14, number: "B4" },
      { id: 74, number: "B5" },
      { id: 84, number: "B6" },
      { id: 34, number: "B7" },
      { id: 94, number: "B8" },
      { id: 15, number: "B9" },
      { id: 16, number: "B10" },
      { id: 17, number: "B11" },
      { id: 18, number: "B12" },
      { id: 19, number: "B13" },
    ],
    [
      { id: 21, number: "C1" },
      { id: 22, number: "C2" },
      { id: 23, number: "C3" },
      { id: 24, number: "C4" },
      { id: 29, number: "C5" },
      { id: 20, number: "C6" },
      { id: 99, number: "C7" },
      { id: 98, number: "C8" },
      { id: 25, number: "C9" },
      { id: 26, number: "C10" },
      { id: 27, number: "C11", isReserved: true },
      { id: 28, number: "C12" },
      { id: 29, number: "C13" },
    ],
    [
      { id: 11, number: "D1" },
      { id: 12, number: "D2" },
      { id: 13, number: "D3", isReserved: true },
      { id: 14, number: "D4" },
      { id: 74, number: "D5" },
      { id: 84, number: "D6" },
      { id: 34, number: "D7" },
      { id: 94, number: "D8" },
      { id: 15, number: "D9" },
      { id: 16, number: "D10" },
      { id: 17, number: "D11" },
      { id: 18, number: "D12" },
      { id: 19, number: "D13" },
    ],
    [
      { id: 11, number: "E1" },
      { id: 12, number: "E2" },
      { id: 13, number: "E3" },
      { id: 14, number: "E4" },
      { id: 74, number: "E5" },
      { id: 84, number: "E6" },
      { id: 34, number: "E7" },
      { id: 94, number: "E8" },
      { id: 15, number: "E9" },
      { id: 16, number: "E10" },
      { id: 17, number: "E11" },
      { id: 18, number: "E12" },
      { id: 19, number: "E13" },
    ],
    [
      { id: 11, number: "F1" },
      { id: 12, number: "F2" },
      { id: 13, number: "F3" },
      { id: 14, number: "F4" },
      { id: 74, number: "F5" },
      { id: 84, number: "F6" },
      { id: 34, number: "F7" },
      { id: 94, number: "F8" },
      { id: 15, number: "F9" },
      { id: 16, number: "F10" },
      { id: 17, number: "F11" },
      { id: 18, number: "F12" },
      { id: 19, number: "F13" },
    ],
    [
      { id: 11, number: "G1" },
      { id: 12, number: "G2" },
      { id: 13, number: "G3" },
      { id: 14, number: "G4" },
      { id: 74, number: "G5" },
      { id: 84, number: "G6" },
      { id: 34, number: "G7", isReserved: true },
      { id: 94, number: "G8" },
      { id: 15, number: "G9" },
      { id: 16, number: "G10" },
      { id: 17, number: "G11" },
      { id: 18, number: "G12" },
      { id: 19, number: "G13" },
    ],
  ];

  // call api cinema
  useEffect(() => {
    const fetchCinema = async () => {
      const { data } = await axios.get(
        `https://backend-boo.herokuapp.com/api/movies/findMovieStep1/${idMovie}`
      );
      await setCinema(data);
    };
    fetchCinema();
  }, [idMovie]);
  console.log("idcinema " + idcinema);

  // call api Date
  useEffect(() => {
    const fetchDate = async () => {
      const { data } = await axios.get(
        `https://backend-boo.herokuapp.com/api/movies/findMovieStep2/${idMovie}/${idcinema}`
      );
      await setDate(data);
    };
    fetchDate();
  }, [idcinema]);
  console.log("iddate " + iddate);

  // call api Session
  useEffect(() => {
    const fetchSesscion = async () => {
      const { data } = await axios.get(
        `https://backend-boo.herokuapp.com/api/movies/findMovieStep3/${idMovie}/${idcinema}/${iddate}`
      );
      await setSesscion(data);
    };
    fetchSesscion();
  }, [iddate]);
  console.log("idsesscion: " + idsesscion);

  // call api Seat
  useEffect(() => {
    const fetchSeat = async () => {
      const { data } = await axios.get(
        `https://backend-boo.herokuapp.com/api/movies/findMovieStep4/${idMovie}/${idcinema}/${iddate}/${idsesscion}`
      );
      await setSeat(data);
    };
    fetchSeat();
  }, [idsesscion]);

  const handleBooking = () => {};
  return (
    <div>
      <div className="selectMovie">
        <div className="col-1">
          <div className="col-1-text">
            Movie:
            <br /> Cinema:
            <br /> Date:
            <br /> Session:
          </div>
          <div>
            <div style={{ color: "orange" }}> {nameMovie}</div>
            <select id="cinema" onChange={(e) => setIdCinema(e.target.value)}>
              <option value="">-- Select Cinema --</option>
              {cinema?.map((items, index) => (
                <option key={index} value={items._id}>
                  {items.name}
                </option>
              ))}
            </select>
            <br />
            <select id="date" onChange={(e) => setIdDate(e.target.value)}>
              <option value="">-- Select Date --</option>
              {date?.map((items, index) => (
                <option key={index} value={items}>
                  {convert(items)}
                </option>
              ))}
            </select>
            <br />
            <select id="time" onChange={(e) => setIdSession(e.target.value)}>
              <option value="">-- Select Session --</option>
              {sesscion?.map((items, index) => (
                <option key={index} value={items}>
                  {items}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-2">
          <div className="flex">
            <div className="available">
              <div className="seatx"></div> &nbsp;Avaliable
            </div>
            <div className="selectedx">
              <div className="seatx"></div> &nbsp;Selected
            </div>
            <div className="occupiedx">
              <div className="seatx"></div> &nbsp;Occupied
            </div>
          </div>
          <div className="screen"></div>
          <div className="importpicker">
            <SeatPicker
              addSeatCallback={addSeatCallback}
              removeSeatCallback={removeSeatCallback}
              rows={rows}
              alpha
              maxReservableSeats={10}
              visible
            />
          </div>
        </div>
        {selected.length !== 0 ? (
          <div className="col-3">
            You selected <span id="count">{selected.length}</span> /10 seats
            <br />
            Seat: {selected.toString()}
            <br />
            Price: {totalprice}$ <br />
            <button className="btPay" onClick={() => setPayment(!payment)}>
              <i className="fa-solid fa-angles-right"></i> Buy Ticket
            </button>
            {payment && (
              <div className="optionpay">
                <div>Select Payment Method</div>
                <button>
                  <i className="fa-regular fa-hand-point-right"></i> At checkout
                  counters
                </button>
                <br />
                <button onClick={handleBooking}>
                  <i className="fa-regular fa-hand-point-right"></i> With PayPal
                </button>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Booking;
// {
//   /* {openModal && (
//             <div className="modal-booking">
//               <div className="modal-booking-form">
//                 <div>
//                   <button className="btnX" onClick={() => setOpenModal(false)}>
//                     <i class="fa-solid fa-xmark"></i>
//                   </button>
//                 </div>
//                 <div className="container">
//                   <div className="title"> Booking Form</div>
//                   <div className="content">
//                     <div className="row">
//                       <div className="coll">Movie:</div>
//                       <div className="colr">{nameMovie}</div>
//                     </div>
//                     <div className="row">
//                       <div className="coll">Cinema:</div>
//                       <div className="colr">Fixgo quận 1</div>
//                     </div>
//                     <div className="row">
//                       <div className="coll">Date:</div>
//                       <div className="colr">{iddate}</div>
//                     </div>
//                     <div className="row">
//                       <div className="coll">Session:</div>
//                       <div className="colr">9:30</div>
//                     </div>
//                     <div className="row">
//                       <div className="coll">Seat:</div>
//                       <div className="colr">10,11,12</div>
//                     </div>
//                     <div className="row">
//                       <div className="coll">Price:</div>
//                       <div className="colr">10$</div>
//                     </div>
//                   </div>
//                   <form action="" onSubmit={handleBooking}>
//                     <button className="button">Booking</button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           )} */
// }
