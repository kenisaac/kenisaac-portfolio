export const CONTACT_MESSAGE_CREATED = "contact.message.created";

export type EventPayloads = {
  [CONTACT_MESSAGE_CREATED]: {
    id: string;
    email: string;
    subject: string;
    createdAt: string;
  };
};
