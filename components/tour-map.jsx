export function TourMap({ location }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Tour Location</h2>
      <div className="aspect-video overflow-hidden rounded-lg border">
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=10&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${location}`}
        ></iframe>
      </div>
      <p className="text-sm text-muted-foreground">
        This tour takes place in {location}. The exact meeting point and detailed directions will be provided after
        booking.
      </p>
    </div>
  )
}
