export function AnnouncementBar() {
  const announcements = [
    "Our camp has Wi-Fi connection",
    "We offer discount for groups",
    "We can arrange taxi for you from any city in Jordan with best prices",
    "Hot air Balloon now available with us",
  ]

  // Join announcements with a black bullet point and more spacing
  const marqueeText = announcements.join(" 　•　 ")

  return (
    <div className="bg-amber-400 py-2 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="text-white font-medium">{marqueeText}</span>
          <span className="text-white font-medium">{marqueeText}</span>
        </div>
      </div>
    </div>
  )
}
