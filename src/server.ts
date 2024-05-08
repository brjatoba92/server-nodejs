import fastify from "fastify";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const app = fastify();

const prisma = new PrismaClient({
  log: ["query"],
});

// Metodos HTTP: GET, POST, PUT, DELETE, DELETE, PATCH, HEAD, OPTIONS, ...

// Corpo de requisição (Request Body)
// Parametros de busca (Search Params / Query Parameter)
// Parametros de rota (Route Params)
// Cabeçalhos (Headers) - Contexto da requisição

// Semanticas = Significado

// Driver nativo / Qury Builders / ORMs

// Object Relational Mapping (Hibernate / Doctrine / ActiveRecord)

// 00:48:33

app.post("/events", async (request, reply) => {
  const createEventsSchema = z.object({
    title: z.string().min(4),
    details: z.string().nullable(),
    maximumAttendees: z.number().int().positive().nullable(),
  });

  const data = createEventsSchema.parse(request.body);

  const event = await prisma.event.create({
    data: {
      title: data.title,
      details: data.details,
      maximumAttendees: data.maximumAttendees,
      slug: new Date().toISOString(),
    },
  });

  // return { eventId: event.id }
  return reply.status(201).send({ eventId: event.id });
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!");
});
