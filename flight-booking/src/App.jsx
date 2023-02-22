/** @format */

import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <section>
        <BookingForm />
        <BookingList />
      </section>
    </>
  );
}

export default App;
