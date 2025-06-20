import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Mock data - would come from API in real app
const itinerary = [
  {
    day: 1,
    title: "Arrival in Bali & Welcome Dinner",
    description:
      "Arrive at Ngurah Rai International Airport where you'll be greeted by your tour guide. Transfer to your hotel in Kuta for check-in and relaxation. In the evening, enjoy a welcome dinner featuring traditional Balinese cuisine and a cultural dance performance.",
    activities: ["Airport pickup", "Hotel check-in", "Welcome dinner", "Cultural performance"],
  },
  {
    day: 2,
    title: "South Bali Beaches & Uluwatu Temple",
    description:
      "After breakfast, visit the beautiful white sand beaches of Nusa Dua. Enjoy swimming, sunbathing, or optional water sports. In the afternoon, visit the magnificent Uluwatu Temple perched on a cliff with stunning ocean views. Watch the famous Kecak Fire Dance at sunset.",
    activities: ["Nusa Dua Beach", "Optional water sports", "Uluwatu Temple", "Kecak Fire Dance"],
  },
  {
    day: 3,
    title: "Ubud Cultural Exploration",
    description:
      "Travel to Ubud, the cultural heart of Bali. Visit the Sacred Monkey Forest Sanctuary, explore the Ubud Art Market, and tour the Ubud Royal Palace. Enjoy lunch at a local restaurant overlooking the lush rice fields.",
    activities: ["Monkey Forest", "Ubud Art Market", "Royal Palace", "Rice field lunch"],
  },
  {
    day: 4,
    title: "Tegallalang Rice Terraces & Coffee Plantation",
    description:
      "Visit the iconic Tegallalang Rice Terraces for breathtaking views and photo opportunities. Continue to a local coffee plantation to learn about the famous Luwak coffee and enjoy a tasting session. Afternoon at leisure to explore Ubud on your own.",
    activities: ["Tegallalang Rice Terraces", "Coffee plantation tour", "Coffee tasting", "Free time in Ubud"],
  },
  {
    day: 5,
    title: "Temples & Water Palace",
    description:
      "Visit the holy spring temple of Tirta Empul where locals perform ritual purification. Continue to the Gunung Kawi Temple with its ancient rock-cut shrines. After lunch, explore the Tirta Gangga Water Palace with its beautiful fountains and gardens.",
    activities: ["Tirta Empul Temple", "Gunung Kawi Temple", "Tirta Gangga Water Palace"],
  },
  {
    day: 6,
    title: "Snorkeling Adventure & Beach Relaxation",
    description:
      "Take a boat trip to Nusa Penida for a day of snorkeling in crystal clear waters with vibrant coral reefs and tropical fish. Visit the famous Kelingking Beach with its T-Rex shaped cliff. Return to your hotel in the late afternoon for relaxation.",
    activities: ["Boat trip to Nusa Penida", "Snorkeling adventure", "Kelingking Beach visit"],
  },
  {
    day: 7,
    title: "Departure Day",
    description:
      "Free morning for last-minute shopping or relaxation. Check out from your hotel and transfer to the airport for your departure flight. End of tour services.",
    activities: ["Free time", "Hotel checkout", "Airport transfer"],
  },
]

export function TourItinerary() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">7-Day Itinerary</h2>
      <Accordion type="single" collapsible className="w-full">
        {itinerary.map((day) => (
          <AccordionItem key={day.day} value={`day-${day.day}`}>
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center text-left">
                <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {day.day}
                </div>
                <div>
                  <h3 className="font-medium">{day.title}</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-12">
              <div className="space-y-4">
                <p className="text-muted-foreground">{day.description}</p>
                <div>
                  <h4 className="mb-2 font-medium">Activities:</h4>
                  <ul className="list-inside list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                    {day.activities.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
