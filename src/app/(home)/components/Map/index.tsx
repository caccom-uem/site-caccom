export function Map() {
  return (
    <div className="w-full h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.517436787006!2d-51.93891492497304!3d-23.40566845589019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd132a8d9ea27%3A0x8a04c17be315d09d!2sBloco%20C56!5e0!3m2!1spt-BR!2sbr!4v1757373821505!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      />
    </div>
  );
}
