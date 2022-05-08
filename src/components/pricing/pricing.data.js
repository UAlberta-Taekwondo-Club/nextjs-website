import { Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from '@material-ui/core';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import PricingList from './pricing-list';
import { AiFillDollarCircle } from "react-icons/ai"

const getSteps = (isStudent) => [
    {
        left: {
            title: "Check your eligibility",
            content: (<img src="/eligibility.png" width="150px" />)
        },
        right: {
            title: "Eligibility",
            content: (
                isStudent ? (
                    <div>
                        You must meet the following requirements to be considered an UAlberta student: <br />
                        <PricingList items={[{
                            icon: <IoIosCheckmarkCircle />,
                            text: 'Currently enrolled as a student at the University of Alberta',
                            isAvailable: true,
                        }, {
                            icon: <IoIosCheckmarkCircle />,
                            text: 'At least 17 years old',
                            isAvailable: true,
                        }
                        ]} />
                    </div>

                ) : (
                    <div>
                        You must meet the following requirements to join the club as an non-UAlberta student:
                        <PricingList items={[{
                            icon: <IoIosCheckmarkCircle />,
                            text: 'At least 18 years old',
                            isAvailable: true,
                        }
                        ]} />
                    </div>
                )
            )
        }
    }, {
        left: {
            title: "Club fees breakdown",
            content: (
                <Table>
                    <TableHead>
                        <TableRow hover>
                            <TableCell>Fee</TableCell>
                            <TableCell align='right'>$</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow hover>
                            <TableCell>Club fee</TableCell>
                            <TableCell align='right'>$20</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell>AIMs fee</TableCell>
                            <TableCell align='right'>$10</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell>VVC membership</TableCell>
                            <TableCell align='right'>{isStudent ? "$0" : "$82.25 - $148.25"}</TableCell>
                        </TableRow>
                        <TableRow selected>
                            <TableCell>Total</TableCell>
                            <TableCell align='right'>{isStudent ? "$30" : "$112.25 - $178.25"}</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow >
                            <TableCell colSpan={2}>
                                Pricing is per semester and in CAD dollars
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            )
        },
        right: {
            title: "Club fees",
            content: (<div>
                Our club aims to provide the most accessible way for students to practice martial arts. Our fees are extremely cheap and consists of:
                <PricingList items={[{
                    icon: <AiFillDollarCircle />,
                    text: (<div>The <strong>club fee</strong> goes directly to the club to pay for room rentals, events, new equipment, and cleaning supplies.</div>),
                    isAvailable: true,
                },
                {
                    icon: <AiFillDollarCircle />,
                    text: (<div>The <strong>Athlete Information Management System (AIMs) fee</strong> goes to fund the university's Club Sports program.</div>),
                    isAvailable: true,
                },
                {
                    icon: <AiFillDollarCircle />,
                    text: (isStudent ? <div>The <strong>Van Vliet Complex (VVC) membership</strong> provides access to the university's fitness facilities and is already paid for in your non-instructional fees.</div> :
                        (<div>The <strong>Van Vliet Complex (VVC) membership</strong> provides access to the university's fitness facilities and can be purchased <a href="https://www.ualberta.ca/campus-community-recreation/facilities/north-campus/access-membership-and-services/membership-categories-and-costs.html" target="_blank">here</a>.</div>)
                    ),
                    isAvailable: !isStudent, // only for non-students
                }
                ]} />
            </div>)
        }
    },
    {
        left: {
            title: "",
            content: ""
        },
        right: {

        }
    }
];
export default getSteps