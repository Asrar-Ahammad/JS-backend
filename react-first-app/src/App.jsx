import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="h-screen bg-slate-900 flex items-start justify-start gap-4 p-4">
        <Card title="Card 1" description="Card 1 description" />
        <Card title="Card 2" description="Card 2 description" />
        <Card title="Card 3" description="Card 3 description" />
        <Card title="Card 4" description="Card 4 description" />
      </main>
      <Footer />
    </>
  );
};

export default App;
