export function Location() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.8876747337766!2d-43.97161792378085!3d-19.931755338920776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6964d969e49f1%3A0x6dc5b7ee01194933!2sR.%20Lima%20Drumond%2C%2013%20-%20Vale%20do%20Jatoba%2C%20Belo%20Horizonte%20-%20MG%2C%2030664-636!5e0!3m2!1spt-BR!2sbr!4v1710272144811!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}