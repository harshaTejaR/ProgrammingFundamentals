import "./contactForm.css";
import Card from "@mui/material/Card";
import CustomizedButtons from "./UI/CustomButton";

export default function ContactForm() {
  return (
    <Card>
      <form action="/contact-form-page" method="post">
        <ul>
          <li>
            <label for="Name"> Name </label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Enter Name"
            />
          </li>
          <li>
            <label for="email"> E-Mail </label>
            <input
              type="email"
              id="email"
              name="user_mail"
              placeholder="Enter Email"
            />
          </li>
          <li>
            <label for="message">Message</label>
            <textarea id="msg" name="user_message"></textarea>
          </li>
          <CustomizedButtons/>
        </ul>
      </form>
    </Card>
  );
}
