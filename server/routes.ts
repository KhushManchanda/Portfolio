import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    try {
      const resumePath = path.resolve(process.cwd(), "attached_assets", "Khush_Manchanda_Fulton_GTA_Resume_1753613799920.pdf");
      res.download(resumePath, "Khush_Manchanda_Resume.pdf", (err) => {
        if (err) {
          console.error("Resume download error:", err);
          res.status(404).json({ error: "Resume not found" });
        }
      });
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ error: "Failed to download resume" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
