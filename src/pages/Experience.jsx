import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../constant/data";

export default function Experience() {
  return (
    <section id='work' className="scroll-mt-28 mb:12 lg:mb-28 sm:mb-40 ">
      <h1 className='work text-3xl lg:text-6xl  font-semibold md:text-[25px] text-center font-playfair pb-14 '>My experience</h1>
      <VerticalTimeline lineColor=""
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)', color: '#fff' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{ borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)" }}
              date={item.date}
              icon={item.icon}
              iconStyle={{ background: "rgba(255, 255, 255, 0.15)", fontSize: "1.5rem" }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-50 ">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}