import React from 'react';
import { BsCalendarEventFill } from "react-icons/bs";
import { MdEmail } from 'react-icons/md';
import { RiInstagramFill } from "react-icons/ri";
import { SiDiscord, SiLinktree, SiYoutube } from 'react-icons/si';

const ICON_SIZE = 30
export const socialMedias = [{
    "title": "Email crtkd@ualberta.ca",
    "url": "mailto:crtkd@ualberta.ca",
    "icon": <MdEmail fontSize={ICON_SIZE} />,
},
{
    "title": "Instagram @ua_taekwondo",
    "url": "https://www.instagram.com/ua_taekwondo/",
    "icon": <RiInstagramFill fontSize={ICON_SIZE} />,
},
{
    "title": "Youtube",
    "url": "https://www.youtube.com/channel/UCF9sw7YeFE9mbM-POCMie7g",
    "icon": <SiYoutube fontSize={ICON_SIZE} />,
},
{
    "title": "Events on Bearsden",
    "url": "https://alberta.campuslabs.ca/engage/organization/tkdclub/events",
    "icon": <BsCalendarEventFill fontSize={ICON_SIZE - 5} />
},
{
    "title": "Discord",
    "url": "https://discord.gg/ScXmdjGzbS",
    "icon": <SiDiscord fontSize={ICON_SIZE} />,
},
{
    "title": "Linktree",
    "url": "https://linktr.ee/ua_tkd",
    "icon": <SiLinktree fontSize={ICON_SIZE} />,
}
]

export const getSocialMedia = (name) => socialMedias.filter(({ title }) => title.toLowerCase() == name.toLowerCase())[0]["url"]
