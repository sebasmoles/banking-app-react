import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import TransactionTable from "../components/TransactionTable";
import "../index.css";

const TransactionPage = () => {
  const txns = [
    {
      id: 1,
      date: "2022-01-01",
      description: "HACKERBANK INC. DES:CCD+ ID: 33375894749",
      type: 0,
      amount: 5000,
      balance: "$12,234.45",
    },
    {
      id: 2,
      date: "2022-01-02",
      description: "HACKERBANK INC. DES:CCD+ ID: 33375894749",
      type: 1,
      amount: 700,
      balance: "$12,234.45",
    },
    {
      id: 3,
      date: "2022-01-03",
      description: "HACKERBANK INC. DES:CCD+ ID: 33375894749",
      type: 0,
      amount: 1500,
      balance: "$12,234.45",
    },
    {
      id: 4,
      date: "2022-01-04",
      description: "HACKERBANK INC. DES:CCD+ ID: 33375894749",
      type: 1,
      amount: 10000,
      balance: "$12,234.45",
    },
    {
      id: 5,
      date: "2022-01-05",
      description: "HACKERBANK INC. DES:CCD+ ID: 33375894749",
      type: 0,
      amount: 900,
      balance: "$12,234.45",
    },
  ];

  const [txnsFiltered, setTxnsFiltered] = useState([]);
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    setTxnsFiltered(txns);

    if (dateFilter) {
      const filtered = txns.filter((t) => t.date === dateFilter);
      setTxnsFiltered(filtered);
    }
  }, [dateFilter]);

  const sortAmount = () => {
    const sorted = [...txnsFiltered].sort((a, b) => {
      return a.amount - b.amount;
    });
    setTxnsFiltered(sorted);
  };

  return (
    <div>
      <Filter getDate={(d) => setDateFilter(d)} />
      <TransactionTable txnsFiltered={txnsFiltered} sortAmount={sortAmount} />
    </div>
  );
};

export default TransactionPage;
