import { CONTACT_MESSAGE_CREATED } from "@/events/event-types";
import { ContactService } from "@/modules/contact/contact.service";

describe("ContactService", () => {
  it("normalizes and stores a contact message, then publishes an event", async () => {
    const createdAt = new Date("2026-05-23T10:00:00.000Z");
    const prisma = {
      contactMessage: {
        create: jest.fn().mockResolvedValue({
          id: "message-1",
          email: "recruiter@example.com",
          subject: "Lead SDET",
          status: "NEW",
          createdAt
        })
      }
    };
    const eventBus = {
      publish: jest.fn().mockResolvedValue(undefined)
    };
    const service = new ContactService(prisma as never, eventBus);

    const result = await service.createMessage({
      name: " Recruiter ",
      email: " Recruiter@Example.com ",
      subject: " Lead SDET ",
      message: "This is a sufficiently detailed message."
    });

    expect(prisma.contactMessage.create).toHaveBeenCalledWith({
      data: {
        name: "Recruiter",
        email: "recruiter@example.com",
        subject: "Lead SDET",
        message: "This is a sufficiently detailed message."
      }
    });
    expect(eventBus.publish).toHaveBeenCalledWith(
      CONTACT_MESSAGE_CREATED,
      expect.objectContaining({ id: "message-1" })
    );
    expect(result).toEqual({
      id: "message-1",
      status: "NEW",
      createdAt: createdAt.toISOString()
    });
  });
});
