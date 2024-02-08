import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  amount: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  amount
}) => (
  <div>
    <h1>Welcome, {firstName} {lastName}!</h1>
    <p>You have: ${amount}</p>
    <a href="coalitioninc.com/brokers/signup" />
  </div>
);

export default EmailTemplate;
