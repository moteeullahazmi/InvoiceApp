import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { InvoiceActions } from "./InvoiceActions";


export function InvoiceList(){
    return (
        <>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Invoice ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Amount ID</TableHead>
                    <TableHead>Status ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                <TableRow>
                    <TableCell>#1</TableCell>
                    <TableCell>Moteeullah Azmi</TableCell>
                    <TableCell>$55.00</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>22/11/2024</TableCell>
                    <TableCell className="text-right">
                        <InvoiceActions />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </>
    )
}