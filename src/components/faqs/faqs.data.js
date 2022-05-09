import ScrollLink from 'components/scroll-link';

export const faqsData = [
    {
        isExpanded: true,
        title: `I don't have any taekwondo experience; can I still join?`,
        contents: (
            <div>
                Yes! We have lots of beginners in the club.
            </div>
        ),
    },
    {
        isExpanded: false,
        title: `Practices have already started; can I still join?`,
        contents: (
            <div>
                Yes! We are constantly taking in new members. You can try out your first practice for free before making a commitment.
            </div>
        ),
    },
    {
        isExpanded: false,
        title: `Is there belt testing?`,
        contents: (
            <div>
                Unfortunately, the club does not provide belt testing.
            </div>
        ),
    },
    {
        isExpanded: false,
        title: `How many practices do I have to attend each week?`,
        contents: (
            <div>
                The club is very flexible, and there is no required number of practices to attend; you can come as much or as little as you want!
            </div>
        ),
    },
    {
        isExpanded: false,
        title: `What do I need to bring to practice?`,
        contents: (
            <div>
                A change of clothes, a water bottle, and yourself. Most members wear a t-shirt and pants/shorts.
            </div>
        ),
    },
    {
        isExpanded: false,
        title: `How long are practices, and do I need to stay the entire time?`,
        contents: (
            <div>
                Our practices are generally between 1 and 2 hours long. But don't worry if you can only join for part of the practice! Just make sure to warm up and stretch on your own time.
            </div>
        ),
    },
    {
        isExpanded: false,
        title: `Where will practices be held?`,
        contents: (
            <div>
                Practices are held in the Education building, room GB-23. You can find the room in the basement at the end of the hallway.
            </div>
        ),
    },
    {
        isExpanded: false,
        title: `Do I need to wear a dobok (taekwondo training uniform) to practice?`,
        contents: (
            <div>
                No, a dobok is not required. Many of our members opt for t-shirt and shorts. If you have a dobok, you are more than welcome to wear it to practice!
            </div>
        ),
    },
    {
        isExpanded: false,
        title: `Are practices separated into skill levels, so that all participants are improving?`,
        contents: (
            <div>
                While practice times are not segregated by level, the instructors will adjust drills to better fit the levels of different people. For example, when we do kicking drills, advanced people will be given longer and more challenging combos, and during fitness portions, they will be given more reps/sets. We also do our best to group people together who have similar experience levels. This way, everyone can enjoy the feeling of improving together!
            </div>
        ),
    },
    {
        isExpanded: false,
        title: `Do I need to purchase any equipment?`,
        contents: (
            <div>
                No, all equipment is provided by the club for each practice.
            </div>
        ),
    },
    {
        isExpanded: false,
        title: `Can non-students join the club?`,
        contents: (
            <div>
                Yes, we accept non-students, including alumni, staff, and students not attending UAlberta. However, non-students must be 18 years or older.
            </div>
        ),
    },
    {
        isExpanded: false,
        title: `Who instructs the practices?`,
        contents: (
            <div>
                We are a student-led club, and our instructors are volunteer students. All of our instructors are black belts and have years of martial arts experience. Some even teach outside of the club.
            </div>
        ),
    },
    {
        isExpanded: false,
        title: `How much are club fees?`,
        contents: (
            <div>
                Club fees are <strong>$30</strong> per semester for students:
                <ol>
                    <li><strong>$20</strong> to be paid via e-transfer to the club email <a href="mailto:crtkd@ualberta.ca">crtkd@ualberta.ca</a>.</li>
                    <li><strong>$10</strong> to Campus Rec via the <a href="https://ualberta.athletesystems.ca">AIMs website</a>.</li>
                </ol>
                All members must also have a valid <a href="https://www.ualberta.ca/campus-community-recreation/facilities/north-campus/access-membership-and-services/membership-categories-and-costs.html">VVC membership</a>.
                <br />Go to <ScrollLink to="fees">fees</ScrollLink> for detailed instructions on how to pay.
            </div>
        ),
    },
];