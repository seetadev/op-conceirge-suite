"use client"
import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table"
import { ethers } from "ethers";
import Web3Modal from 'web3modal';
import { auctionContract } from '@/services/Services';
import toast, { Toaster } from 'react-hot-toast';

// @ts-nocheck

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

type Props = {}

const DataTable = (props: Props) => {
  const [data, setData] = useState([]);
  // console.log("this is data", data[0].carDetails);

  const getAllAuctionData = async () => {
    try {

      const contract = await auctionContract();
      const transaction = await contract?.fetchAllAuctions();
      // await transaction.wait();
      // console.log(transaction);
      setData(transaction);
      console.log("all Auctions", transaction);

    } catch (error) {
      console.log(error)
      toast.error("Transactin Failed! :(")
    }
  }


  useEffect(() => {
    getAllAuctionData();
  }, []);

  const endTime = (timestamp:any)=>new Date(parseInt(timestamp) * 1000);

  return (
    <>
      <Table className='bg-white mt-6 rounded-lg shadow-lg'>
        <TableHeader>
          <TableRow>
            <TableHead className="">Car Details</TableHead>
            <TableHead>Car ID</TableHead>
            <TableHead>End Timestamp</TableHead>
            <TableHead>Finalized</TableHead>
            <TableHead>Highest Bid</TableHead>
            <TableHead>Highest Bider</TableHead>
            <TableHead>Minimum Bid</TableHead>
            <TableHead className="text-right">Seller</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data:any) => (
            <TableRow key={data[1]}>
              <TableCell >{data.carDetails}</TableCell>
              <TableCell >{Number(data.carId)}</TableCell>
              <TableCell >{Number(data.endTime)}</TableCell>
              <TableCell >{(data.finalized).toString()}</TableCell>
              <TableCell >{Number(data.highestBid)}</TableCell>
              <TableCell >{data.highestBidder}</TableCell>
              <TableCell >{Number(data.minBid)}</TableCell>
              <TableCell >{data.seller}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
      <Toaster />
    </>
  )
}

export default DataTable