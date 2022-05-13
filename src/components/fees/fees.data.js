import { Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from '@material-ui/core';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import List from './list';
import { AiFillDollarCircle } from "react-icons/ai"

export default function getSteps(isStudent) {
    const steps = [
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
                            <List items={[{
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
                            You must meet the following requirements to join the club as a non-UAlberta student:
                            <List items={[{
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
                                    Fees are per semester and in CAD dollars
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                )
            },
            right: {
                title: "Club fees",
                content: (<div>
                    Our club aims to provide the most accessible way for students to practice martial arts. Our fees are extremely cheap and consist of:
                    <List items={[{
                        icon: <AiFillDollarCircle />,
                        text: (<div>The <strong>club fee</strong> goes directly into the club to pay for room rentals, events, new equipment, and cleaning supplies.</div>),
                        isAvailable: true,
                    },
                    {
                        icon: <AiFillDollarCircle />,
                        text: (<div>The <strong>Athlete Information Management System (AIMs) fee</strong> funds the university's Club Sports program. You only paid this once per semester to join all club sports.</div>),
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
                title: "E-transfer $20 to crtkd@ualberta.ca",
                content: (<div style={{ display: "flex", flexDirection: "column", gap: "15px" }} ><img src="etransfer_1.png" width="100%" loading='lazy' />
                    <img src="etransfer_2.png" width="100%" loading='lazy' />
                </div>)
            },
            right: {
                title: "E-transfer $20",
                content: (<div>
                    Pay the club fee by e-transferring $20 to the club's email, crtkd@ualberta.ca:
                    <List items={[{
                        icon: 1,
                        text: (<div>Log in to your online banking.</div>),
                        isAvailable: true,
                    },
                    {
                        icon: 2,
                        text: (<div>Click on <strong>Send an Interac e-Transfer.</strong></div>),
                        isAvailable: true,
                    },
                    {
                        icon: 3,
                        text: (<div>Add a new <strong>Interac e-Transfer Recipient</strong>, enter <strong>$20</strong> for the amount, then hit Next.</div>),
                        isAvailable: true,
                    },
                    {
                        icon: 4,
                        text: (<div>Enter <strong>UAlberta Taekwondo Club</strong> for name and <strong>crtkd@ualberta.ca</strong> for email, then hit Next.</div>),
                        isAvailable: true,
                    },
                    {
                        icon: 5,
                        text: (<div>Review the details, and then hit Send. Auto-deposit is set up, so no security question is necessary.</div>),
                        isAvailable: true,
                    },
                    ]} />
                </div>)
            }
        },
        {
            left: {
                title: "Pay the $10 AIMs fee",
                content: (<div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <img src="aims_1.png" width="100%" loading='lazy' />
                    <img src="aims_2.png" width="100%" loading='lazy' />
                    <img src="aims_3.png" width="100%" loading='lazy' />
                    <img src="aims_4.png" width="100%" loading='lazy' />
                    <img src="aims_5.png" width="100%" loading='lazy' />
                    <img src="aims_6.png" width="100%" loading='lazy' />
                </div>)
            },
            right: {
                title: "$10 AIMs",
                content: (<div>
                    Pay the $10 AIMs fee:
                    <List items={[{
                        icon: 1,
                        text: (<div>Go to <a href="https://ualberta.athletesystems.ca" target="_blank">ualberta.athletesystems.ca</a>.</div>),
                        isAvailable: true,
                    },
                    {
                        icon: 2,
                        text: (<div>If you don't have an account, click on <strong>Create your own account</strong>.
                            {isStudent && " This is NOT your CCID login!"}
                        </div>),
                        isAvailable: true,
                    },
                    {
                        icon: 3,
                        text: (<div>Sign in to AIMS.</div>),
                        isAvailable: true,
                    },
                    {
                        icon: 4,
                        text: (<div>Click on <strong>Register for a team or club</strong>.</div>),
                        isAvailable: true,
                    },
                    {
                        icon: 5,
                        text: (<div>Select <strong>Taekwondo Club</strong> from the dropdown menu and then click on <strong>Begin registration</strong>.</div>),
                        isAvailable: true,
                    },
                    {
                        icon: 6,
                        text: (<div>Fill in your personal information.</div>),
                        isAvailable: true,
                    },
                    {
                        icon: 7,
                        text: (<div>Thoroughly read through the legal documents, and select <strong>Yes - I agree</strong> from the dropdown once read.</div>),
                        isAvailable: true,
                    },
                    {
                        icon: 8,
                        text: (<div>Click on <strong>Checkout</strong> and fill in your card details to pay the $10 fee.</div>),
                        isAvailable: true,
                    },
                    ]} />
                </div>)
            }
        },

    ]

    // VVC membership only for non-students
    if (!isStudent)
        steps.push({
            left: {
                title: "Pay for VVC membership",
                content: ""
            },
            right: {
                title: "VVC Membership",
                content: (<div>All members must have a valid Van Vliet Complex (VVC) membership that can be purchased <a href="https://www.ualberta.ca/campus-community-recreation/facilities/north-campus/access-membership-and-services/membership-categories-and-costs.html">here</a>.
                    <br /> <br />
                    <iframe src="https://www.ualberta.ca/campus-community-recreation/facilities/north-campus/access-membership-and-services/membership-categories-and-costs.html" style={{ border: 0 }} width="100%" height="300px" />

                </div>)
            }
        })
    return steps
}