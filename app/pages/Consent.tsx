import { Radio, RadioGroup, FormControl, FormControlLabel } from '@mui/material';
import NavigationButton from '../components/NavigationButton';

function Consent() {
  return (
    <div className="flex flex-col space-y-4 p-7 sm:p-10">
      <h3 className='text-3xl font-semibold text-black'>Information and Consent Letter - MTurk</h3>

      <p><strong>* Please read this consent form and select the applicable choice.</strong></p>

      <p><strong>Title of Project:</strong> Understanding Decision-Making</p>

      <p><strong>Faculty Supervisor:</strong></p>
      <p>Dr. Samuel Johnson</p>
      <ul>
        <li>University of Waterloo, Waterloo, Ontario, Canada (Psychology)</li>
        <li><a href="mailto: samuel.johnson@uwaterloo.ca">samuel.johnson@uwaterloo.ca</a></li>
        <li>519-888-4567 x41339</li>
      </ul>
          
      <p><strong>Student Investigator:</strong></p>
      <p>Kristina Wu</p>
      <ul>
        <li>University of Waterloo, Waterloo, Ontario, Canada (Psychology)</li>
        <li><a href="mailto: kristina.wu@uwaterloo.ca">kristina.wu@uwaterloo.ca</a></li>
      </ul>

      <p>
        This letter will explain what the study is about, possible risks and benefits, and your rights as a
        research participant. If you are concerned about or do not understand something in the letter,
        please ask one of the investigators prior to consenting to the study.
      </p>

      <p>
        I (Kristina Wu) am a MA student in the Department of Psychology at the University of Waterloo,
        Canada, conducting research in collaboration with Dr. Samuel Johnson. You are invited to
        participate in a study investigating how people prioritize tasks.
      </p>

      <br />

      <strong>
        <p>I. Your Responsibilities as a Participant:</p>
        <p>What This Study Involves</p>
      </strong>

      <p>
        Participation in this study will consist of a task management game that will take approximately
        12 minutes of your time. You will be given several task lists and asked to make a series of task
        selection choices. You will be asked demographic questions for the purpose of record-keeping
        and providing information about our sample.
      </p>

      <br />

      <strong>
        <p>II. Your Rights as a Participant:</p>
        <p>Participation and Remuneration</p>
      </strong>

      <p>
        Your participation in this study is voluntary. Should you choose to participate, $2.00 USD will be
        deposited toward your MTurk account plus a bonus payment of up to $1.00 USD. You may
        decline to answer any demographic questions that you do not wish to answer by leaving them blank, and you
        can withdraw your participation at any time by not submitting responses without penalty or
        loss of remuneration. To receive remuneration, please proceed to the end of the questionnaire.
      </p>

      <strong><p>Personal Benefits of the Study</p></strong>

      <p>
        Participating in this study will not provide any direct personal benefits.
      </p>

      <strong><p>Risks to Participation in the Study</p></strong>

      <p>
        There are no known or anticipated risks with participating in this study
      </p>

      <strong><p>Confidentiality</p></strong>

      <p>
        No Internet transmission is ever fully secure or error free. Please Note:
        We do not collect or use internet protocol (IP) addresses or other information which could link
        your participation to your computer or electronic device.
      </p>

      <p>
        The data collected from this study will be anonymously collected, maintained
        without identifying information and stored on University of Waterloo servers. The data will be
        electronically archived after completion of the study and maintained for at least 7 years and
        then erased. Datarelated to your participation may be submitted to an open access repository
        or journal (i.e., the data may be publicly available). Data will be completely anonymous from
        the beginning of the study and will be presented in aggregate form in publications. This process
        is integral to the research process as it allows other researchers to verify results and avoid
        duplicating research. Other individuals may access these data by accessing the open access
        repository. Although theanonymizeddataset may be shared publicly, your identity will always
        remain confidential. 
      </p>

      <strong><p>Research Ethics Clearance</p></strong>

      <p>
        This study has been reviewed and received ethics clearance through a University of Waterloo
        Research Ethics Board (REB #45178). If you have questions for the Board, contact the Office of
        Research Ethics, toll-free at 1-833-643-2379 (Canada and USA), 1-519-888-4440,
        or reb@uwaterloo.ca.
      </p>

      <strong><p>Questions?</p></strong>

      <p>
        If you have any questions related to this study or would like additional information to help
        assist you in reaching a decision about participation, please contact Kristina Wu at
        kristina.wu@uwaterloo.ca.
      </p>

      <strong><p>Consent to Participate</p></strong>

      <p>
        By providing your consent, you are not waiving your legal rights or releasing the investigator(s)
        or involved institution(s) from their legal and professional responsibilities.
      </p>

      <FormControl>
        {/* Radio buttons */}
        <RadioGroup
          name="consent"
        >
          <FormControlLabel 
            value={1} control={<Radio />} 
            label="Yes, I consent to participate in this study." />
          <FormControlLabel 
            value={0} control={<Radio />} 
            label="No, I do not consent (You will not be able to participate in this study)" />
        </RadioGroup>

      </FormControl>

      <NavigationButton />
    </div>
  );
}

export default Consent;