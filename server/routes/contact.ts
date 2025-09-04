import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";
import { ContactMessageRequest, ContactMessageResponse } from "@shared/api";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(1),
});

export const handleContact: RequestHandler = async (req, res) => {
  const parsed = schema.safeParse(req.body as ContactMessageRequest);
  if (!parsed.success) {
    return res.status(400).json({ ok: false, error: "Invalid payload" } satisfies ContactMessageResponse);
  }
  const { name, email, phone, message } = parsed.data;

  const host = process.env.SMTP_HOST || "smtp-relay.brevo.com";
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const user = process.env.SMTP_USER || "964222001@smtp-brevo.com";
  const pass = process.env.SMTP_PASS || "7skbaLZBOSCfYDty";
  const to = process.env.CONTACT_TO || "kartikdassarora@gmail.com";
  const from = process.env.CONTACT_FROM || "Kaarthik Dass Arora <kartikdassarora@gmail.com>";

  if (!host || !port || !user || !pass || !to) {
    return res.status(500).json({ ok: false, error: "Email not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO." } satisfies ContactMessageResponse);
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    // Verify connection configuration (helps surface auth/DNS issues)
    await transporter.verify();

    const subject = `Hive & Crew Contact — ${name}${phone ? ` (${phone})` : ""}`;
    const safeMsg = message.replace(/\r?\n/g, " ").replace(/"/g, "''");
    const timestamp = new Date().toISOString();
    const csvHeader = 'name,email,phone,message,timestamp\n';
    const csvRow = `"${name}","${email}","${phone ?? ''}","${safeMsg}","${timestamp}"\n`;
    const csv = csvHeader + csvRow;

    const text = `Lead captured (CSV attached).\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone ?? '-'}\nTime: ${timestamp}\n\nMessage:\n${message}`;

    await transporter.sendMail({
      from,
      to,
      replyTo: `${name} <${email}>`,
      subject,
      text,
      attachments: [
        { filename: `lead-${timestamp}.csv`, content: csv, contentType: 'text/csv' },
      ],
    });

    const response: ContactMessageResponse = { ok: true };
    res.status(200).json(response);
  } catch (e) {
    console.error("Email send error:", e);
    const msg = e instanceof Error ? e.message : "Failed to send";
    const response: ContactMessageResponse = { ok: false, error: msg };
    res.status(500).json(response);
  }
};
