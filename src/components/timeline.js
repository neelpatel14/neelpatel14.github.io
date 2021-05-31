import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react'
import Suitcaseicon from './suitcaseicon'
import Capicon from './capicon'

const TimeLine = () => (
  <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2020 - Present"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
      icon={<Suitcaseicon />}
    >
      <h3 className="vertical-timeline-element-title" style={{fontSize:"38px"}}>Appian Corporation</h3>
      <h4 className="vertical-timeline-element-subtitle text-muted">Senior Cloud Software Engineer</h4>
      <p>
        Kubernetes, Amazon Web Services, Java, Python, Bash
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2019 - 2020"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
      icon={<Suitcaseicon />}
    >
      <h3 className="vertical-timeline-element-title" style={{fontSize:"38px"}}>Appian Corporation</h3>
      <h4 className="vertical-timeline-element-subtitle text-muted">Cloud Software Engineer II</h4>
      <p>
        Amazon Web Services, Python, Java, Python, Bash
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2018 - 2019"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
      icon={<Suitcaseicon />}
    >
      <h3 className="vertical-timeline-element-title" style={{fontSize:"38px"}}>Appian Corporation</h3>
      <h4 className="vertical-timeline-element-subtitle text-muted">Cloud Software Engineer</h4>
      <p>
        Amazon Web Services, Java, Python, Bash
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2017-2017"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<Suitcaseicon />}
    >
      <h3 className="vertical-timeline-element-title"  style={{fontSize:"38px"}}>MicroStrategy Corporation</h3>
      <h4 className="vertical-timeline-element-subtitle text-muted">Software Engineering Intern</h4>
      <p>
        Platform Wide Application, Python, Amazon Web Services
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="2015 - 2018"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<Capicon />}
    >
      <h3 className="vertical-timeline-element-title"  style={{fontSize:"38px"}}>University of Virginia</h3>
      <h4 className="vertical-timeline-element-subtitle text-muted">Bachelor of Science in Computer Science & Financial Economics</h4>
      <p>
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="2011 - 2015"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<Capicon />}
    >
      <h3 className="vertical-timeline-element-title"  style={{fontSize:"38px"}}>Fairfax High School</h3>
      <h4 className="vertical-timeline-element-subtitle text-muted">High School Diploma</h4>
      <p>
      </p>
    </VerticalTimelineElement>
  </VerticalTimeline>
)

export default TimeLine;
