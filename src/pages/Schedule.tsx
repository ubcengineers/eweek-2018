import * as React from "react";

import About from "../components/content/About";
import Calendar from "../components/content/Calendar";

import ScheduleContent from "../markdown/schedule.md";

export default () => {
  return (
    <div className="fadein">
      <About color="aqua">
        <ScheduleContent />
        <Calendar
          title=""
          days={[
            <>
              Sunday
              <br />
              January 13th
            </>,
            <>
              Monday
              <br />
              January 14th
            </>,
            <>
              Tuesday
              <br />
              January 15th
            </>,
            <>
              Wednesday
              <br />
              January 16th
            </>,
            <>
              Thursday
              <br />
              January 17th
            </>,
            <>
              Friday
              <br />
              January 18th
            </>,
            <>
              Saturday
              <br />
              January 19th
            </>
          ]}
          events={[
            {
              day: 1,
              end: 24,
              start: 22,
              subtitle: "10pm - 12am",
              title: "Opening Ceremonies"
            },
            {
              day: 2,
              end: 10,
              start: 8,
              subtitle: "8am - 10am",
              title: "Red-Eye Breakfast"
            },
            {
              day: 2,
              end: 17,
              start: 15,
              subtitle: "3pm - 5pm",
              title: "fEUSball"
            },
            {
              day: 2,
              end: 18.5,
              start: 17.5,
              subtitle: "5:30pm - 6:30pm",
              title: "Trivia"
            },
            {
              day: 3,
              end: 10,
              start: 8,
              subtitle: "8am - 10am",
              title: "PP Pancake Breakfast"
            },
            {
              day: 3,
              end: 16,
              start: 13,
              subtitle: "1pm - 4pm",
              title: "Chariot Racing"
            },
            {
              day: 3,
              end: 17.5,
              start: 19.5,
              subtitle: "5:30pm - 7:30pm",
              title: "Pong Tournament"
            },
            {
              day: 3,
              end: 23.5,
              start: 20,
              subtitle: "8pm - 11:30pm",
              title: "Pit Purge"
            },
            {
              day: 4,
              end: 13,
              start: 11,
              subtitle: "11am - 13pm",
              title: "True Engineer"
            },
            {
              day: 4,
              end: 15,
              start: 14,
              subtitle: "2pm - 3pm",
              title: "EUS AGM"
            },
            {
              day: 4,
              end: 18,
              start: 16,
              subtitle: "4pm - 6pm",
              title: "Movie Roast-a-thon"
            },
            {
              day: 5,
              end: 10,
              start: 8,
              subtitle: "8am - 10am",
              title: "Geers & Queers Breakfast"
            },
            {
              day: 5,
              end: 11.5,
              start: 10.5,
              subtitle: "10:30am - 11:30am",
              title: "GeogEUSsr"
            },
            {
              day: 5,
              end: 14.5,
              start: 12.5,
              subtitle: "12:30pm - 14:30pm",
              title: "Dodgeball"
            },
            {
              day: 5,
              end: 21,
              start: 18,
              subtitle: "6pm - 9pm",
              title: "Old Red New Red"
            },
            {
              day: 6,
              end: 13.5,
              start: 11.5,
              subtitle: "11:30am - 1:30pm",
              title: "Cooking with Beer"
            },
            {
              day: 6,
              end: 15.5,
              start: 18,
              subtitle: "3:30pm - 6pm",
              title: "FilmfEUSt"
            },
            {
              day: 6,
              end: 24,
              start: 20,
              subtitle: "8pm - 2am",
              title: "Red Knight"
            },
            {
              day: 7,
              end: 24,
              start: 18,
              subtitle: "6pm - 12am",
              title: "2nd Annual 99th Engineer's Ball"
            }
          ]}
        />
      </About>
    </div>
  );
};
