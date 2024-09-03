import "./About.css"

export default function About() {
    return (
        <div className="about-div">
                <div className="left-div">
                    <embed src="Resume.pdf" width="800" height="1100" className="pdf"/>
                </div>
                <div className="right-div">
                    <div className="top-right-div">
                        <h3>Grant D. Congdon</h3>
                        <p><b>Phone:</b> (440)-413-6432</p>
                        <p><b>Email:</b> grantdcongdon@gmail.com</p>
                        <p><b>Education</b>: Purdue University, Goss Scholar</p>
                        <p><b>Major</b>: Electrical Engineering</p>
                        <p><b>Graduation Date</b>: May 2027</p>
                        <p><b>Current Position(s)</b>:</p>
                        <ul className="list">
                            <li className="bullet"><em>Undergraduate Researcher Assistant</em> (Verma Lab)</li>
                            <li className="bullet"><em>Content & Production Intern</em> (ASM International)</li>
                        </ul>
                    </div>
                </div>
                <div className="background-img"/>
        </div>
    );
}