import { useState, useEffect } from "react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from './ui/button';
import { getTrades } from './Soroban/soroban.js'

const Trades = () => {
    const [trades, setTrades] = useState([]);

    useEffect(() => {
      const trades = getTrades();
      console.log(trades);
    }, [])
    
  return (
    <div>
      <Table>
        <TableCaption>{trades.length === 0 ? "No Trade Exist" : "List of trades"}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>SELLER</TableHead>
            <TableHead>ENERY AMOUNT</TableHead>
            <TableHead>Price</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trades.map((trade) => (
            <TableRow key={trade.id}>
              <TableCell className="font-medium">{trade.id}</TableCell>
              <TableCell>{trade.seller}</TableCell>
              <TableCell>{trade.energy_amount}</TableCell>
              <TableCell>{trade.price}</TableCell>
              <TableCell><Button>Buy</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Trades