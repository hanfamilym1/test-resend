import { EmailTemplate } from '../../../components/email-template';
import { CoalitionWelcomeMail } from '../../../emails/test-template'
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Coalition Test <onboarding@resend.dev>',
      // to: ['michael.han@coalitioninc.com', 'shane@coalitioninc.com', 'erik.brown@coalitioninc.com', 'kaydee.walter@coalitioninc.com', 'sarah@coalitioninc.com', 'abby.dobbs@coalitioninc.com'],
      to: ['michael.han@coalitioninc.com'],
      subject: "Government Contracts",
      react: CoalitionWelcomeMail({name: 'Michael Han'}) as React.ReactElement,
    });

    console.log('hey', data, error)

    if (error) {
      // @ts-ignore
      return Response.json({ error });
    }
    
    // @ts-ignore
    return Response.json({ data });
  } catch (error) {
    // @ts-ignore
    return Response.json({ error });
  }
}
