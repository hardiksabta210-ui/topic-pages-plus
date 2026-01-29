import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are EcoBuddy, a friendly and knowledgeable environmental AI assistant. Your role is to help communities and households understand, track, and reduce their environmental impact.

IMPORTANT GUIDELINES:
1. ONLY answer questions related to environmental topics, sustainability, and eco-friendly practices
2. Focus on these core areas:
   - Air Quality & Pollution (local air quality, pollution sources, health impacts, protective measures)
   - Energy & Water Conservation (household tips, cost savings, efficiency practices)
   - Waste Segregation (proper sorting, recycling, composting, reducing waste)
   - General environmental awareness and sustainable living

3. Provide hyperlocal, practical advice when possible
4. Guide users step-by-step for actionable tasks
5. Use clear, simple language that anyone can understand
6. Include specific numbers, facts, and statistics when helpful
7. If a question is outside environmental topics, politely redirect to sustainability topics

8. For off-topic questions, respond with: "I'm EcoBuddy, your sustainability assistant! I specialize in environmental topics like air quality, energy conservation, and waste management. How can I help you with these areas?"

Always be encouraging and positive - small actions lead to big changes!`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, topic } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Add topic-specific context if provided
    let contextPrompt = SYSTEM_PROMPT;
    if (topic) {
      const topicContexts: Record<string, string> = {
        "air-quality": `\n\nThe user is specifically asking about AIR QUALITY. Focus on:
- Local air quality index (AQI) explanations
- Common pollutants (PM2.5, PM10, NO2, O3, CO, SO2)
- Health impacts and vulnerable populations
- Indoor vs outdoor air quality
- Practical tips for reducing exposure
- Plants that purify air
- When to use masks or air purifiers`,
        
        "energy-water": `\n\nThe user is specifically asking about ENERGY & WATER CONSERVATION. Focus on:
- Household energy-saving tips
- Water conservation techniques
- Appliance efficiency ratings
- Smart home solutions
- Cost calculations and savings
- Renewable energy options for homes
- Water recycling and rainwater harvesting`,
        
        "waste": `\n\nThe user is specifically asking about WASTE SEGREGATION. Focus on:
- Proper waste categories (dry, wet, hazardous, e-waste)
- Recycling guidelines
- Composting methods
- Reducing single-use items
- Local recycling facilities
- Common sorting mistakes
- Zero-waste lifestyle tips`
      };
      
      contextPrompt += topicContexts[topic] || "";
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: contextPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("eco-chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
