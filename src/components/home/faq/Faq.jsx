import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div>
      <section className="section">
        <div className="faq">
          <h4 className="sectionhead">
            <strong>FAQ's</strong>
          </h4>
          <ul className="dk12">
            <li className="faq1">
              <div className="question">
                <strong>Q.</strong> How can I create an IRCTC account login ID?
              </div>
              <div className="answer active">
                To create a new IRCTC login ID, visit the official home page of
                the IRCTC. Right below the login box, there is an option to sign
                up. When you click on it, a registration box will open. Now
                enter your user ID, password, security question, and preferred
                language, followed by personal information like name, gender,
                Aadhaar card number, PAN card number and your residential
                address. After you enter all the information, click on submit.
                For the verification of your IRCTC login account, a link will be
                sent to your registered email ID. Your registration process is
                now complete, and you are ready to use your IRCTC account.
              </div>
            </li>

            <li className="faq1">
              <div className="question">
                <strong>Q.</strong> Can I change my IRCTC login ID?
              </div>
              <div className="answer active">
                Making your login ID is a one-time registration process. Once
                you have registered, you cannot change your username or the
                login credentials for a given email address.
              </div>
            </li>

            <li className="faq1">
              <div className="question">
                <strong>Q.</strong> How can I log into my IRCTC account?
              </div>
              <div className="answer active">
                For IRCTC login, open the ixigo app and just log in using your
                registered username. Next, select the departure and arrival
                destinations, date of travel, the classNameName you want to
                travel in, and your traveller details. Then, click on &lsquo;Pay
                Now&rsquo; to complete the payment. Once it is successful, the
                app will ask you to enter your password. Do this, and make your
                booking.
              </div>
            </li>

            <li className="faq1">
              <div className="question">
                <strong>Q.</strong> What is the maximum number of IRCTC train
                tickets one can book at a time?
              </div>
              <div className="answer active">
                As per IRCTC, maximum number of bookings allowed per month = 12
                and maximum number of passengers booked per ticket = 6. So, a
                maximum of 36 passengers can be booked in a month from IRCTC ID.
              </div>
            </li>

            <li className="faq1">
              <div className="question">
                <strong>Q.</strong> How can I recover my IRCTC user ID and
                password?
              </div>
              <div className="answer active">
                You can find your login details on the IRCTC welcome message
                sent to your registered email. To locate this mail, use search
                terms like &lsquo;IRCTC&rsquo; or &apos; &apos; in your inbox.
                If you don&rsquo;t have this mail and wish to reset your
                password, go to irctc website, then Login and then Forgot
                Password. Submit the required details and enter the OTP received
                via email/SMS to be led to a new page. Enter your new password
                here, and click on &lsquo;Update Password&rsquo; to complete the
                process. Your username can be recovered similarly, by going to{" "}
                <a
                  className="u-link-sm"
                  href="https://www.irctc.co.in"
                  target="_blank"
                  rel="nofollow"
                >
                  irctc.co.in
                </a>
                , then Login and then Forgot User ID. The existing user ID will
                be sent to your registered email.
              </div>
            </li>

            <li className="faq1">
              <div className="question">
                <strong>Q.</strong> How can I book railway tickets by mobile?
              </div>
              <div className="answer active">
                You can book railway tickets on mobile by using visiting
                websites. Simply choose your route, date and preferred seat;
                update passenger details (including the IRCTC user ID); and make
                the payment to book your ticket. During COVID-19, you must also
                share your destination address, for contact tracing as per
                government regulations.
              </div>
            </li>

            <li className="faq1">
              <div className="question">
                <strong>Q.</strong> How do I cancel the IRCTC train ticket after
                the train has departed?
              </div>
              <div className="answer active">
                If a railway booking is confirmed, it can be cancelled up to 48
                hours before the scheduled departure of the train. As per IRCTC
                website, tickets booked online cannot be cancelled after the
                chart is prepared.
              </div>
            </li>

            <li className="faq1">
              <div className="question">
                <strong>Q.</strong> Are children charged for IRCTC train tickets
                booking?
              </div>
              <div className="answer active">
                Children under 5 years of age are not charged for a train
                journey. Children between 5 to 12 years of age are charged fully
                if a berth is sought for the child separately. However, if a
                berth/seat is not required for a child between 5 to 12 years of
                age, then only half of the adult fare will be applicable.
              </div>
            </li>

            <li className="faq1">
              <div className="question">
                <strong>Q.</strong> What is TDR in IRCTC??
              </div>
              <div className="answer active">
                TDR refers to the ticket deposit receipt. Passengers who have a
                ticket but have not travelled, and want to apply for a refund,
                can file for a TDR. The IRCTC provides facilities to file TDR
                online. If the train chart is not prepared, users can cancel
                their ticket online. It is only after a chart is ready that a
                TDR needs to be filed for a refund. Some different scenarios
                where an IRCTC TDR can be file
              </div>

              <ol type="number">
                <p>&bull;AC failure in train coaches.</p>
                <p>&bull;No room for passenger after chart preparation.</p>
                <p>
                  &bull;Change In Reservation Status from confirmed to
                  Waitlisted/Part Waitlisted/RAC after chart preparation.
                </p>
                <p>
                  &bull;Fare difference if the passenger travelled in a lower
                  classNameName.
                </p>
                <p>
                  &bull;Fare difference in case a proper coach is not attached.
                </p>
                <p>
                  &bull;Passenger could not cancel because the chart was
                  prepared at the originating station or a previous remote
                  location.
                </p>
                <p>
                  &bull;Partially Confirmed/Waitlisted tickets, but all
                  passengers did not travel.
                </p>
                <p>
                  &bull;Partially Confirmed/Waitlisted tickets and waitlisted
                  passengers did not travel.
                </p>
                <p>
                  &bull;Passengers partially travelled, before the journey was
                  terminated short of destination.
                </p>
                <p>
                  &bull;Passenger did not travel as reservation was provided in
                  a lower classNameName.
                </p>
                <p>
                  &bull;Passenger did not travel due to RAC ticket after chart
                  preparation.
                </p>
                <p>
                  &bull;Train being diverted, so it cannot touch the boarding
                  station.
                </p>
                <p>
                  &bull;Train being diverted, so it cannot touch the destination
                  station.
                </p>
                <p>
                  &bull;Train being late by more than 3 hours and the passengers
                  not travelling on it.
                </p>
                <p>&bull;Train missed as connecting train was late.</p>
                <p>&bull;Train terminated short of destination.</p>
                <p>&bull;Being wrongly charged by the TTE.</p>
              </ol>
            </li>

            <li className="faq1">
              <div className="question">
                <strong>Q.</strong> What are the new IRCTC rules for passengers?
              </div>
              <div className="answer active">
                In light of COVID-19, the IRCTC has issued some new rules and
                safety precautions for passengers travelling on trains. These
                rules state that:
              </div>

              <ol>
                <p>
                  &bull; Only passengers with confirmed and RAC tickets will be
                  allowed to board the train.
                </p>
                <p>
                  &bull; Face masks and hand hygiene are mandatory for all
                  passengers.
                </p>
                <p>
                  &bull; Passengers have to reach the railway station at least
                  90 minutes before the scheduled departure of the train.
                </p>
                <p>
                  &bull; Social distancing is mandatory at the station and also
                  on the train.
                </p>
                <p>
                  &bull; On arrival, passengers will have to follow the health
                  protocols prescribed by the destination state.
                </p>
                <p>
                  &bull; Catering Service is not available and catering charges
                  not included in the fare
                </p>
                <p>
                  &bull; No blanket and linen shall be provided in the train.
                </p>
              </ol>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Faq;
